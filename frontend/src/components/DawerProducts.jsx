import React, { useContext } from 'react';
import { ShopContext } from '../contexts/shopContext';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Badge, Typography, Paper, IconButton, Divider } from '@mui/material';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloseIcon from '@mui/icons-material/Close';

import TableProducts from './TableProducts';

export default function DawerProducts() {
    const { myCarrito } = useContext(ShopContext);
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ right: open });
    };

    const list = (route) => {

        return (
            <>
                < Box component={Paper} elevation={0} sx={{ width: 400 }}>
                    < Box sx={{ pt: 2, pl: 2, pb: 1, display: 'flex', alignItems: 'center' }}>
                        <LocalMallIcon sx={{ mr: 1, color: '#0f3460' }} />
                        <Typography variant="body1" color="initial" sx={{ mr: 'auto', color: '#0f3460', fontWeight: 'bold' }}>
                            {myCarrito.length} productos
                        </Typography>
                        <IconButton sx={{ mr: 4 }} size='large' onClick={() => setState({ right: false })}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Divider sx={{ mt: 1.5, mb: 1.5 }} />

                <TableProducts typeStyle={2} />

                <Box sx={{ mt: 'auto', p: 3 }}>

                </Box>
            </>
        )
    };

    return (
        <div>
            <IconButton aria-label="" size='large'>
                <Badge
                    color="error"
                    badgeContent={myCarrito.length}
                >
                    <ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} onClick={toggleDrawer(true)} />
                </Badge>

            </IconButton>

            <Drawer
                anchor="right"
                open={state.right}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </div>
    );
}
