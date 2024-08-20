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
                  <Button>Red</Button>
                </NavLink>
                <Button onClick={() => handleOpen(director)}>Del</Button>
              </TableCell>
            </TableRow>
          ))}
        {!data && (
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
