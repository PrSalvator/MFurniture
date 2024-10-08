import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoadComponent } from "../../shared/components/load_component";
import { lazy } from "react";
import { ERoutes } from "@/shared/enum/routes";
import { Layout } from "@/widgets/layout";

const OrdersPage = LoadComponent(lazy(async () => import("@/pages/orders")));
const ShopsPage = LoadComponent(lazy(async () => import("@/pages/shops")));
const DirectorsPage = LoadComponent(
  lazy(async () => import("@/pages/directors"))
);
const FurnituresPage = LoadComponent(
  lazy(async () => import("@/pages/furnitures"))
);
const AddOrderPage = LoadComponent(
  lazy(async () => import("@/pages/add_order"))
);
const EditOrderPage = LoadComponent(
  lazy(async () => import("@/pages/edit_order"))
);
const AddFurniturePage = LoadComponent(
  lazy(async () => import("@/pages/add_furniture"))
);
const EditFurniturePage = LoadComponent(
  lazy(async () => import("@/pages/edit_furniture"))
);
const AddDirectorPage = LoadComponent(
  lazy(async () => import("@/pages/add_director"))
);
const EditDirectorPage = LoadComponent(
  lazy(async () => import("@/pages/edit_director"))
);
const AddShopPage = LoadComponent(lazy(async () => import("@/pages/add_shop")));
const EditShopPage = LoadComponent(
  lazy(async () => import("@/pages/edit_shop"))
);

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ERoutes.ALL_ORDERS,
        element: <OrdersPage />,
      },
      {
        path: ERoutes.ALL_SHOPS,
        element: <ShopsPage />,
      },
      {
        path: ERoutes.ALL_DIRECTORS,
        element: <DirectorsPage />,
      },
      {
        path: ERoutes.ALL_FURNITURES,
        element: <FurnituresPage />,
      },
      {
        path: ERoutes.ADD_ORDER,
        element: <AddOrderPage />,
      },
      {
        path: ERoutes.EDIT_ORDER,
        element: <EditOrderPage />,
      },
      {
        path: ERoutes.ADD_FURNITURE,
        element: <AddFurniturePage />,
      },
      {
        path: ERoutes.EDIT_FURNITURE,
        element: <EditFurniturePage />,
      },
      {
        path: ERoutes.ADD_DIRECTOR,
        element: <AddDirectorPage />,
      },
      {
        path: ERoutes.EDIT_DIRECTOR,
        element: <EditDirectorPage />,
      },
      {
        path: ERoutes.ADD_SHOP,
        element: <AddShopPage />,
      },
      {
        path: ERoutes.EDIT_SHOP,
        element: <EditShopPage/>
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to={ERoutes.ALL_ORDERS} />,
  },
]);
