import React, { useContext } from "react";
import { ShopContext } from "../contexts/shopContext";
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/material";
import FilterList from "../components/FilterList";

import Loader from "../components/loader/loader";

function LayoutShop() {
    const { openLoader } = useContext(ShopContext)
    return (
        <>
            <Grid container spacing={0}>
                {/* <Grid item xs={2} lg={2.5} xl={2} sx={{ p: 3, background: 'white', borderRight: '1px solid #dcdfe4' }}>
                    <FilterList />
                </Grid> */}
                <Grid item xs={12} lg={12} xl={12}>
                    <Box component="main" id="detail" sx={{ paddingTop: 30 }}>
                        <FilterList />
                        <Outlet />
                    </Box>
                </Grid>

               
            </Grid>
            {/* <Loader open={true} />  */}
        </>
    );
}

export default LayoutShop;