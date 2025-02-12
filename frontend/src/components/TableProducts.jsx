import React, { useContext } from 'react';
import { ShopContext } from '../contexts/shopContext';
import { Box, Grid, IconButton, Divider } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { capitalizeFirstLetter, formatToColombianCurrency } from '../js';
import fotoAguardiente from "../images/producto.jpg";

export default function TableProducts({  typeStyle = 1, viewDeleteButton = false }) {
    const { myCarrito } = useContext(ShopContext);

    const addQuantityOfproduct = (idProduct) => {
      
    }

    const removeQuantityOfProduct = (idProduct) => {
      
    };

    const removeProduct = (idProduct) => {
       
    };

    return (
        <>
            {
                typeStyle === 1 && myCarrito?.map((product, index) => (
                    < Box component={Paper} elevation={3} padding={2.5} sx={{ mb: 3 }} key={product.id + index}>
                        <Grid container spacing={0} justifyContent={'center'} alignItems={'center'}>
                            <Grid item xs={2}>
                                <img src={fotoAguardiente} alt="" sizes="" width={100} />
                            </Grid>
                            <Grid item xs={8} textAlign={'start'}>
                                <Typography variant="h6" color="initial" sx={{ mb: 2 }}>{capitalizeFirstLetter(product.name)}</Typography>
                                <Box sx={{ display: 'flex', mb: 2 }}>
                                    <Typography variant="body1" color="initial" sx={{ color: '#7d879c' }}>{formatToColombianCurrency(product.pricePerUnit)} &nbsp;</Typography>
                                    <Typography variant="body1" color="initial">* {product.quantityOfProduct} und &nbsp; =</Typography>
                                    <Typography variant="body1" color="initial" sx={{ color: '#d23f57', fontWeight: 700 }}>
                                        &nbsp; {formatToColombianCurrency(product.total)}
                                    </Typography>
                                </Box>

                                <ToggleButtonGroup
                                    // value={alignment}
                                    exclusive
                                    // onChange={handleAlignment}
                                    aria-label="text alignment"
                                    color='error'
                                >

                                    <ToggleButton
                                        value="right"
                                        color='error'
                                        aria-label="right aligned"
                                        onClick={() => removeQuantityOfProduct(product._id)}
                                    >
                                        <ArrowCircleDownIcon />
                                    </ToggleButton>
                                    <ToggleButton value="center" aria-label="centered" disabled>
                                        <Typography variant="body1" color="initial" sx={{ mx: 1, fontWeight: 700 }}>
                                            {product.quantityOfProduct}
                                        </Typography>
                                    </ToggleButton>
                                    <ToggleButton
                                        value="left"
                                        aria-label="left aligned"
                                        onClick={() => addQuantityOfproduct(product._id)}
                                    >
                                        <ArrowCircleUpIcon />
                                    </ToggleButton>

                                </ToggleButtonGroup>
                            </Grid>
                            <Grid item xs={typeStyle === 1 ? 2 : 1}>
                                <IconButton color='error' onClick={() => removeProduct(product._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Box >
                ))
            }

            {
                typeStyle === 2 && myCarrito?.map((product, index) => (
                    < Box component={Paper} elevation={0} key={product._id + index} sx={{ width: '100%' }}>
                        <Grid container spacing={0} justifyContent={'start'} alignItems={'center'}>
                            <Grid item xs={4} textAlign={'center'}>
                                <img src={fotoAguardiente} alt="" sizes="" width={90} />
                            </Grid>
                            <Grid item xs={6} textAlign={'start'}>
                                <Typography variant="h6" color="initial" sx={{ mb: 1.2 }}>{capitalizeFirstLetter(product.name)}</Typography>
                                <Box sx={{ mb: 1.2 }}>
                                    <Typography variant="body1" color="initial" sx={{ color: '#7d879c' }}>{formatToColombianCurrency(product.price)} </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} textAlign={'start'}>
                                {
                                    viewDeleteButton &&
                                    <IconButton color='error' onClick={() => removeProduct(product._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            </Grid>
                        </Grid>
                        <Divider sx={{ mt: 1.5, mb: 1.5 }} />
                    </Box >
                ))
            }
        </>
    );
}