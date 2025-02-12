import React from 'react';
import { Box, Chip, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './styles.css';
import DawerProducts from './DawerProducts';

function FilterList() {

    return (
        <>
            <AppBar sx={{ backgroundColor: 'white', color: 'initial', borderBottom: '1px solid #e0e0e0' }} elevation={0}>
                <Box textAlign={'start'} sx={{ background: '#212529', pt: .9, pb: .9, mb: 2 }}>
                    <Box className='scrolling-content'>
                        <Chip className='chip' label='¡Oferta!' size='small' />
                        <Typography className='scrolling-text' variant="body1" color="initial" sx={{ color: 'white' }}>
                            🔥 ¡Regístrate ahora y disfruta de un 20% de descuento en tu primera compra! 🎉
                        </Typography>
                        
                    </Box>
                </Box>

                <Container maxWidth="xl" >
                    <Grid container spacing={0} justifyContent={'center'} alignItems={'center'}>
                        <Grid item xs={6}>

                        </Grid>

                        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <DawerProducts />
                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center', justifyContent: 'end' }, mt: 2.5, mb: 0 }}>
                                
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </AppBar>
        </>
    );
}

export default FilterList;