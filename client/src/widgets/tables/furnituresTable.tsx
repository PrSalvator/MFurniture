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
import { Button } from "@mui/material";

export const FurnituresTable = () => {
  const { data, isPending } = useGetAllFurnituresPresenter();
  if (isPending) return <>Loading...</>;
  return (
    <Table>
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
                <Button>Red</Button>
                <Button>Del</Button>
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
