import { ERoutes } from "@/shared/enum/routes";
import { DirectorsTable } from "@/widgets/tables/directorsTable";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Directors = () => {
  return (
    <div>
      <section className="flex justify-between mb-3">
        <h1 className="text-h1">Начальники цехов</h1>
        <NavLink to={ERoutes.ADD_DIRECTOR}>
          <Button variant="outlined">Добавить</Button>
        </NavLink>
      </section>
      <DirectorsTable />
    </div>
  );
};

export default Directors;
