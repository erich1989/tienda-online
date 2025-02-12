import * as React from 'react';
import { ShopContext } from '../contexts/shopContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField'

import actionProducts from '../actions/products';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalAddProduct({ styleButton = 1, setProducts, setSelectedProducts }) {
    const { setOpenLoader, setMyCarrito } = React.useContext(ShopContext);
    const [open, setOpen] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        price: null
    });

    const createProduct = async (data) => {
        try {
            setOpenLoader(true);
            const { response, status } = await actionProducts.createProduct(data);
            if (status === 200) {
                setProducts(response);
                setSelectedProducts(response);
                setOpenLoader(false);
            }
        } catch (error) {

        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearch = (e) => {
        const { value, name } = e.target;
        setNewProduct(prevState => ({
            ...prevState,
            [name]: name === 'id' || name === 'price' ? Number(value) : value
        }));
    };

    const handleSubmit = () => {
        setOpen(false);
        setKey((prevKey) => prevKey + 1);
        createProduct(newProduct);
    };

    return (
        <React.Fragment>

            {
                styleButton === 1 &&
                <Button
                    onClick={handleClickOpen}
                    endIcon={<AddCircleIcon />}
                    variant='contained'
                    color='error'
                    sx={{ background: '#d23f57', fontWeight: 'bold' }}
                >
                    Agregar producto
                </Button>
            }
            {
                styleButton === 2 &&
                <Button
                    variant='contained'
                    onClick={handleClickOpen}
                    startIcon={<FindReplaceIcon />}
                    color='error'
                    sx={{ background: '#d23f57', fontWeight: 'bold' }}
                >
                    Inténtalo de nuevo
                </Button>
            }

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                maxWidth="xs"
            >
                <DialogTitle>{"Agregar producto"}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-slide-description">
                        Los campos marcados con (*) son obligatorios.
                    </DialogContentText>

                    <TextField
                        id="name"
                        name='name'
                        label="Nombre *"
                        fullWidth
                        size='small'
                        value={newProduct.name}
                        onChange={handleSearch}
                        sx={{ mt: 3 }}
                    />

                    <TextField
                        id="prices"
                        name='price'
                        type='number'
                        label="Precio *"
                        fullWidth
                        size='small'
                        value={newProduct.price}
                        onChange={handleSearch}
                        sx={{ mt: 3 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='contained'
                        fullWidth
                        onClick={handleSubmit}
                        startIcon={<SendIcon />}
                        color='error'
                        sx={{ background: '#d23f57', fontWeight: 'bold', mx: 2, my: 1 }}
                    >
                        Crear
                    </Button>
                </DialogActions>
            </Dialog>

        </React.Fragment>
    );
}