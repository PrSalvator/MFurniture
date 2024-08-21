import { useDeleteOrderPresenter } from "@/entities/case/order/delete_order/presenter";
import { useGetOrdersPresenter } from "@/entities/case/order/get_all/presenter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/table";
import { ERoutes } from "@/shared/enum/routes";
import { mdiPencil, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const OrdersTable = () => {
  const { data, isPending } = useGetOrdersPresenter();
  const { Modal, handleOpen } = useDeleteOrderPresenter();
  if (isPending) return <h3 className="text-h3">Загрузка...</h3>;
  return (
    <Table>
      <Modal />
      <TableHeader>
        <TableRow>
          <TableHead>Мебель</TableHead>
          <TableHead>Цеха</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data?.map((order) => (
            <TableRow>
              <TableCell>{order.furniture.name}</TableCell>
              <TableCell>
                {order.shops.map((order) => order.number).join(", ")}
              </TableCell>
              <TableCell>
                <NavLink to={ERoutes.EDIT_ORDER} state={order}>
                  <Button>
                    <Icon
                      path={mdiPencil}
                      size="24px"
                      className="text-dark-gray"
                    />
                  </Button>
                </NavLink>
                <Button onClick={() => handleOpen(order)}>
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
