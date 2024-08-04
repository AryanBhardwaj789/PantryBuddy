"use client"
import { firestore } from "@/firebase";
import { Box, Typography, Stack, Button, Modal, TextField, IconButton, Container, Grid, Card, CardContent, CardActions } from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon, Search as SearchIcon, AddCircleOutline as AddCircleOutlineIcon, RemoveCircleOutline as RemoveCircleOutlineIcon } from '@mui/icons-material';
import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
};

export default function Home() {
  const [inventory, setInventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'));
    const docs = await getDocs(snapshot);
    const inventoryList = [];
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() });
    });
    setInventory(inventoryList);
  };

  useEffect(() => {
    updateInventory();
  }, []);

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
    } else {
      await setDoc(docRef, { quantity: 1 });
    }
    await updateInventory();
  };

  const increaseItemQuantity = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1 });
      await updateInventory();
    }
  };

  const decreaseItemQuantity = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity > 1) {
        await setDoc(docRef, { quantity: quantity - 1 });
      } else {
        await deleteDoc(docRef);
      }
      await updateInventory();
    }
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    await deleteDoc(docRef);
    await updateInventory();
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme}>
      <Box
        width="100vw"
        height="100vh"
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={2}
        sx={{
          background: 'linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%)',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Item
            </Typography>
            <Stack width="100%" direction={'row'} spacing={2}>
              <TextField
                id="outlined-basic"
                label="Item"
                variant="outlined"
                fullWidth
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <Button
                variant="outlined"
                onClick={() => {
                  addItem(itemName);
                  setItemName('');
                  handleClose();
                }}
              >
                Add
              </Button>
            </Stack>
          </Box>
        </Modal>
        <Container maxWidth="md">
          <Typography variant="h2" color={'#333'} textAlign={'center'} gutterBottom>
            Pantry Tracker
          </Typography>
          <Stack direction="row" spacing={2} mb={2}>
            <TextField
              id="search-bar"
              label="Search Items"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Stack>
          <Button variant="contained" onClick={handleOpen} startIcon={<AddIcon />}>
            Add New Item
          </Button>
          <Grid container spacing={3} mt={3}>
            {filteredInventory.map(({ name, quantity }) => (
              <Grid item xs={12} sm={6} md={4} key={name}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {quantity}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      color="primary"
                      onClick={() => increaseItemQuantity(name)}
                    >
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => decreaseItemQuantity(name)}
                    >
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Button
                      size="small"
                      color="error"
                      onClick={() => removeItem(name)}
                      startIcon={<DeleteIcon />}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
