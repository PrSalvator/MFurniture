import { ERoutes } from "@/shared/enum/routes";
import { FurnituresTable } from "@/widgets/tables/furnituresTable";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Furnitures = () => {
  return (
    <div>
      <section className="flex justify-between mb-3">
        <h1 className="text-h1">Мебель</h1>
        <NavLink to={ERoutes.ADD_FURNITURE}>
          <Button variant="outlined">Добавить</Button>
        </NavLink>
      </section>
      <FurnituresTable />
    </div>
  );
};

export default Furnitures;
