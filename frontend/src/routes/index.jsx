import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    // {
    //     path: "/shop",
    //     element: <LayoutShop />,
    //     children: [
    //         {
    //             path: "shopping-cart", // Ruta del carrito de compras como hija de shop
    //             element: <ShoppingCart />, // Componente del carrito de compras
    //         },
    //         {
    //             path: "checkout-page",
    //             element: <CheckoutPage />,
    //         },
    //         {
    //             path: "validate-order",
    //             element: <ValidateOrder />,
    //         },
    //         {
    //             path: "confirmation-page/:orderId",
    //             element: <ConfirmationPage />
    //         },
    //         {
    //             path: "orden-tracking/:orderId",
    //             element: <OrderTracking />
    //         },
    //         {
    //             path: ":category",
    //             element: <ProductsPage />,
    //         },
    //         {
    //             path: ":category/:title",
    //             element: <ProductDetail />
    //         },

    //     ]
    // },
    // {
    //     path: "/login",
    //     element: <FormLogin />,
    // },
    // {
    //     path: "/register",
    //     element: <Register />,
    // },
    // {
    //     path: "/account",
    //     element: <Account />,
    // },
])

export default router;