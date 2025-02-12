import React, { useContext } from 'react';
import { ShopContext } from '../contexts/shopContext';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Box, IconButton, Tooltip } from '@mui/material';

import gverde from '../images/producto.jpg';
import { formatToColombianCurrency } from "../js";
import actionCart from '../actions/cart';

function ProductCard({ product }) {
  const { products, myCarrito, setMyCarrito, setOpenLoader } = useContext(ShopContext);
  const title = product?.name || 'Título no disponible';

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleAddProduct = async (productId) => {
    setOpenLoader(true);

    const data = { productId };
    const {response, status} = await actionCart.addProductToCart(data);

    if (status == 200) {
        setMyCarrito(response);
        setOpenLoader(false);          
    }

  };

  const handleNavigate = () => {

  }

  return (
    <Card
      sx={{
        margin: 2,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
        },
      }}
      elevation={0}
    >
      <CardContent>
        <Box
          sx={{
            background: '#f5f5f5',
            p: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            mb: 2,
            width: '100%',
            height: '200px', // Ajusta la altura según necesites
          }}
        >
          <CardMedia
            component="img"
            image={gverde}
            alt={title}
            sx={{
              objectFit: 'contain',
              width: '180px',
              height: '180px',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </Box>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign={'left'}
          sx={{
            fontWeight: 'bold',
            color: '#373f50',
            ml: 1.5,
            fontSize: '1.1rem',
          }}
        >
          {capitalizeFirstLetter(product.name)}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          textAlign={'left'}
          sx={{
            color: '#D23F57',
            fontWeight: 600,
            ml: 1.5,
            fontSize: '1rem',
          }}
        >
          {formatToColombianCurrency(product.price)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', mb: 1.5 }}>
        <Tooltip title="Ver detalles">
          <IconButton onClick={handleNavigate} sx={{ color: '#373f50' }}>
            <VisibilityOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Agregar a carrito">
          <IconButton onClick={() => handleAddProduct(product.id)} sx={{ color: '#D23F57' }}>
            <AddShoppingCartOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Añadir a favoritos">
          <IconButton sx={{ color: '#D23F57' }}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
