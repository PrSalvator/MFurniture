import { useDeleteDirectorPresenter } from "@/entities/case/director/delete/presenter";
import { useGetDirectorsPresenter } from "@/entities/case/director/get_all/presenter";
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

export const DirectorsTable = () => {
  const { data, isPending } = useGetDirectorsPresenter();
  const { Modal, handleOpen } = useDeleteDirectorPresenter();

  if (isPending) return <>Loading...</>;
  return (
    <Table>
      <Modal />
      <TableHeader>
        <TableRow>
          <TableHead>Фамилия</TableHead>
          <TableHead>Имя</TableHead>
          <TableHead>Отчество</TableHead>
          <TableHead>Действие</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((director) => (
            <TableRow>
              <TableCell>{director.lastname}</TableCell>
              <TableCell>{director.firstname}</TableCell>
              <TableCell>{director.patronymic}</TableCell>
              <TableCell>
                <NavLink to={ERoutes.EDIT_DIRECTOR} state={director}>
                  <Button>
                    <Icon
                      path={mdiPencil}
                      size="24px"
                      className="text-dark-gray"
                    />
                  </Button>
                </NavLink>
                <Button onClick={() => handleOpen(director)}>
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
