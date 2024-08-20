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
import { NavLink } from "react-router-dom";

export const ShopsTable = () => {
  const { data, isPending } = useGetAllShopsPresenter();
  if (isPending) return <h3 className="text-h3">Загрузка...</h3>;
  return (
    <Table>
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
              <TableCell>{shop.director.firstname}</TableCell>
              <TableCell>
                <NavLink to={""}>
                  <button>Red</button>
                </NavLink>
                <button onClick={() => {}}>Del</button>
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
