import { createBrowserRouter, Navigate } from "react-router-dom"
import { LoadComponent } from "../../shared/components/load_component"
import { lazy } from "react"
import { ERoutes } from "@/shared/enum/routes"

const OrdersPage = LoadComponent(lazy(async () => import("@/pages/orders")))
const ShopsPage = LoadComponent(lazy(async () => import("@/pages/shops")))
const DirectorsPage = LoadComponent(lazy(async () => import("@/pages/directors")))
const FurnituresPage = LoadComponent(lazy(async () => import("@/pages/furnitures")))

export const routes = createBrowserRouter([
    {
        children: [
            {
                path: ERoutes.ALL_ORDERS,
                element: <OrdersPage/>
            },
            {
                path: ERoutes.ALL_SHOPS,
                element: <ShopsPage/>
            },
            {
                path: ERoutes.ALL_DIRECTORS,
                element: <DirectorsPage/>
            },
            {
                path: ERoutes.ALL_FURNITURES,
                element: <FurnituresPage/>
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to={ERoutes.ALL_ORDERS}/>,
    }
])