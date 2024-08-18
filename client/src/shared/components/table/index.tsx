import { forwardRef, HTMLAttributes } from "react"

export const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement>>(({...props}, ref) => (
    <table ref={ref} {...props}></table>
))

export const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(({...props}, ref) => (
    <tr ref={ref} {...props}></tr>
))

export const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({...props}, ref) =>(
    <thead ref={ref} {...props}></thead>
))

export const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(({...props}, ref) => (
    <tbody ref={ref} {...props}></tbody>
))

export const TableHead = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(({...props}, ref) => (
    <th ref={ref} {...props}></th>
))

export const TableCell = forwardRef<HTMLTableCellElement, HTMLAttributes<HTMLTableCellElement>>(({...props}, ref) => (
    <td ref={ref} {...props}></td>
))