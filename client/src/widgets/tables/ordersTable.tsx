import { useGetOrdersPresenter } from "@/entities/case/order/get_all/presenter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/table";

export const OrdersTable = () => {
  const { data, isPending } = useGetOrdersPresenter();
  if (isPending) return <h3 className="text-h3">Загрузка...</h3>;
  return (
    <Table>
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
                {order.shops.map((order) => order.number).join(",")}
              </TableCell>
              <TableCell>
                <button>Red</button>
                <button>Del</button>
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
