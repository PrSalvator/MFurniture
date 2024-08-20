import { useDeleteFurniturePresenter } from "@/entities/case/furniture/delete/presenter";
import { useGetAllFurnituresPresenter } from "@/entities/case/furniture/get_all/presenter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/table";
import { ADDRESS } from "@/shared/constants";
import { ERoutes } from "@/shared/enum/routes";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const FurnituresTable = () => {
  const {handleOpen, Modal} = useDeleteFurniturePresenter();
  const { data, isPending } = useGetAllFurnituresPresenter();
  if (isPending) return <>Loading...</>;
  return (
    <Table>
      <Modal/>
      <TableHeader>
        <TableRow>
          <TableHead>Название</TableHead>
          <TableHead>Описание</TableHead>
          <TableHead>Действие</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data &&
          data.map((furniture) => (
            <TableRow>
              <TableCell>{furniture.name}</TableCell>
              <TableCell>
                <a href={`${ADDRESS}/${furniture.file}`}>{furniture.file}</a>
              </TableCell>
              <TableCell>
                <NavLink to={ERoutes.EDIT_FURNITURE} state={furniture}>
                  <Button>Red</Button>
                </NavLink>
                <Button onClick={() => handleOpen(furniture)}>Del</Button>
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
