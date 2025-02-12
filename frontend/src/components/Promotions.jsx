import React from "react";
import { ShopContext } from "../contexts/shopContext";
import { Typography, Grid, TextField, Button } from "@mui/material";

import ProductCard from "./ProductCard";
import ModalAddProduct from "./ModalAddProduct";
import actionProducts from "../actions/products";

const gridTitleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
};

const gridTitleStyle2 = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
};



function Promotions() {
    const { products, setProducts, setOpenLoader } = React.useContext(ShopContext);
    const [textNoProducts, setTextNoProducts] = React.useState('');
    const [budget, setBudget] = React.useState(0);
    const [selectedProducts, setSelectedProducts] = React.useState([]);

    function findBestCombination() {
        let bestCombination = [];
        let bestSum = 0;
    
        const getCombinations = (arr) => {
            const result = [];
            const f = (prefix, arr) => {
                for (let i = 0; i < arr.length; i++) {
                    result.push([...prefix, arr[i]]);
                    f([...prefix, arr[i]], arr.slice(i + 1));
                }
            };
            f([], arr);
            return result;
        };
    
        const combinations = getCombinations(products);
    
        combinations.forEach(combination => {
            const sum = combination.reduce((total, product) => total + product.price, 0);
            if (sum <= budget && sum > bestSum) {
                bestSum = sum;
                bestCombination = combination;
            }
        });
    
        // Si se encontró una combinación válida
        if (bestCombination.length > 0) {
            setSelectedProducts(bestCombination);
            setTextNoProducts(''); // No hay mensaje de error si se encontró una combinación
        } else {
            setSelectedProducts([]); // No hay productos seleccionados
            setTextNoProducts('No se encontraron productos dentro del presupuesto.');
        }
    
        return bestCombination; // Devuelve la mejor combinación
    }

    const returnProducts = async () => {
        try {
            setOpenLoader(true);
            const { response, status } = await actionProducts.returnAllProducts();
            if (status === 200) {
                if (response.length === 0) {
                    setTextNoProducts('No hay productos disponibles');
                }
                setProducts(response);
                setSelectedProducts(response)
                setOpenLoader(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    React.useEffect(() => {
        returnProducts();
    }, []);

    return (
        <Grid container spacing={4} sx={{ pb: 7, mb: 4, borderBottom: '1px solid #e0e0e0' }}>

            <Grid item xs={6} sx={gridTitleStyle2}>
                <div style={{ display: 'flex' }}>
                    <TextField
                        id="outlined-basic"
                        type="number"
                        label="Presupuesto"
                        size="small"
                        variant="outlined"
                        sx={{ mr: 1 }}
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
                    <Button variant="contained" color="primary" size="small" onClick={findBestCombination}>
                        Buscar
                    </Button>
                </div>
            </Grid>
            <Grid item xs={6} sx={gridTitleStyle}>
                <ModalAddProduct setProducts={setProducts} setSelectedProducts={setSelectedProducts} />
            </Grid>

            {
                selectedProducts.length === 0 &&
                <Grid item xs={12}>
                    <Typography variant="body1" color="initial">{textNoProducts}</Typography>
                </Grid>

                ||

                selectedProducts?.map((product) => (
                    <Grid item xs={3}>
                        <ProductCard product={product} />
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Promotions;