import { ERoutes } from "@/shared/enum/routes";
import { OrdersTable } from "@/widgets/tables/ordersTable";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div>
      <section className="flex justify-between mb-3">
        <h1 className="text-h1">Заказы</h1>
        <NavLink to={ERoutes.ADD_ORDER}>
          <Button variant="outlined">Добавить</Button>
        </NavLink>
      </section>
      <OrdersTable />
    </div>
  );
};

export default Orders;
