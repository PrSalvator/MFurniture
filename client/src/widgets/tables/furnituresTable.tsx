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
import { mdiFileDocumentOutline, mdiPencil, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export const FurnituresTable = () => {
  const { handleOpen, Modal } = useDeleteFurniturePresenter();
  const { data, isPending } = useGetAllFurnituresPresenter();
  if (isPending) return <>Loading...</>;
  return (
    <Table>
      <Modal />
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
                <a href={`${ADDRESS}/${furniture.file}`}>
                  <div className="flex space-x-2 items-center">
                    <Icon path={mdiFileDocumentOutline} size="32px" />
                    {furniture.file}
                  </div>
                </a>
              </TableCell>
              <TableCell>
                <NavLink to={ERoutes.EDIT_FURNITURE} state={furniture}>
                  <Button>
                    <Icon
                      path={mdiPencil}
                      size="24px"
                      className="text-dark-gray"
                    />
                  </Button>
                </NavLink>
                <Button onClick={() => handleOpen(furniture)}>
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
