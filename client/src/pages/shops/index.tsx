import { ERoutes } from "@/shared/enum/routes";
import { ShopsTable } from "@/widgets/tables/shopsTable";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Shops = () => {
  return (
    <div>
      <section className="flex justify-between mb-3">
        <h1 className="text-h1">Цеха</h1>
        <NavLink to={ERoutes.ADD_SHOP}>
          <Button variant="outlined">Добавить</Button>
        </NavLink>
      </section>
      <ShopsTable />
    </div>
  );
};

export default Shops;
