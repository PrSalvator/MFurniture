import { forwardRef, HTMLAttributes } from "react";

export const Table = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ ...props }, ref) => (
  <div className="rounded-t-lg overflow-hidden">
    <table ref={ref} className="border-collapse w-full text-table font-[500] text-table table-fixed" {...props}></table>
  </div>
));

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ ...props }, ref) => <tr ref={ref} className="h-[60px]" {...props}></tr>);

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => (
  <thead ref={ref} {...props} className="bg-light-blue"></thead>
));

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ ...props }, ref) => <tbody ref={ref} {...props}></tbody>);

export const TableHead = forwardRef<
  HTMLTableCellElement,
  HTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => <th ref={ref} {...props}></th>);

export const TableCell = forwardRef<
  HTMLTableCellElement,
  HTMLAttributes<HTMLTableCellElement>
>(({ ...props }, ref) => (
  <td ref={ref} className="border border-light-blue text-center" {...props}></td>
));
