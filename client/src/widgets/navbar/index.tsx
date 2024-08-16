import { ERoutes } from "@/shared/enum/routes";
import { NavbarItem } from "@/widgets/navbar/navbar_item";
import { mdiOrderBoolAscendingVariant } from "@mdi/js";
import { mdiTableFurniture } from "@mdi/js";
import { mdiFactory } from "@mdi/js";
import { mdiAccountGroupOutline } from "@mdi/js";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-col space-y-3">
      <NavLink to={ERoutes.ALL_ORDERS}>
        {({ isActive }) => (
          <NavbarItem
            icon={mdiOrderBoolAscendingVariant}
            label="Заказы"
            {...{ selected: isActive }}
          />
        )}
      </NavLink>
      <NavLink to={ERoutes.ALL_FURNITURES}>
        {({ isActive }) => (
          <NavbarItem
            icon={mdiTableFurniture}
            label="Мебель"
            {...{ selected: isActive }}
          />
        )}
      </NavLink>
      <NavLink to={ERoutes.ALL_SHOPS}>
        {({ isActive }) => (
          <NavbarItem
            icon={mdiFactory}
            label="Цеха"
            {...{ selected: isActive }}
          />
        )}
      </NavLink>
      <NavLink to={ERoutes.ALL_DIRECTORS}>
        {({ isActive }) => (
          <NavbarItem
            icon={mdiAccountGroupOutline}
            label="Начальники"
            {...{ selected: isActive }}
          />
        )}
      </NavLink>
    </div>
  );
};
