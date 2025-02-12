import React from 'react';
import { ShopContext } from '../contexts/shopContext';
import { Container } from '@mui/material';

import FilterList from '../components/FilterList';
import Promotions from '../components/Promotions';
import Loader from "../components/loader/loader";


function Home() {
    const { openLoader } = React.useContext(ShopContext);
    return (
        <>
            <FilterList />
            <Container sx={{ mt: 20 }}>
                <Promotions />
            </Container>
            <Loader open={openLoader} />
        </>
    );
}

export default Home;
