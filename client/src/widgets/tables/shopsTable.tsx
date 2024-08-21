import { useDeleteShopPresenter } from "@/entities/case/shop/delete/presenter";
import { useGetAllShopsPresenter } from "@/entities/case/shop/get_all/presenter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/table";
import { ERoutes } from "@/shared/enum/routes";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { mdiPencil } from "@mdi/js";
import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { useFio } from "@/shared/hooks/useFio";

export const ShopsTable = () => {
  const { data, isPending } = useGetAllShopsPresenter();
  const { Modal, handleOpen } = useDeleteShopPresenter();
  const { getFio } = useFio();
  if (isPending) return <h3 className="text-h3">Загрузка...</h3>;
  return (
    <Table>
      <Modal />
      <TableHeader>
        <TableRow>
          <TableHead>Номер</TableHead>
          <TableHead>Начальник</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data?.map((shop) => (
            <TableRow>
              <TableCell>{shop.number}</TableCell>
              <TableCell>{getFio(shop.director)}</TableCell>
              <TableCell>
                <NavLink to={ERoutes.EDIT_SHOP} state={shop}>
                  <Button>
                    <Icon
                      path={mdiPencil}
                      size="24px"
                      className="text-dark-gray"
                    />
                  </Button>
                </NavLink>
                <Button onClick={() => handleOpen(shop)}>
                  <Icon
                    path={mdiTrashCanOutline}
                    size="24px"
                    className="text-dark-gray"
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        {data?.length === 0 && (
          <TableRow>
            <TableCell>...</TableCell>
            <TableCell>...</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
