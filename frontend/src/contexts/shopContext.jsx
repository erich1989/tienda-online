import React, { createContext, useState, useEffect } from 'react';

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [openLoader, setOpenLoader] = useState(false);
    const [products, setProducts] = React.useState([]);
    const [myCarrito, setMyCarrito] = React.useState([]);

    const contextValues = {
        openLoader, setOpenLoader,
        products, setProducts, 
        myCarrito, setMyCarrito
    }

    return (
        <ShopContext.Provider value={contextValues}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContext, ShopContextProvider }



