import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner} from "@nextui-org/react";
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectUsage } from "./usageTableSlice"
import {useAsyncList} from "@react-stately/data";


const columns = [
  {
    key: "source",
    label: "Source",
  },
  {
    key: "IP",
    label: "IP",
  },
  {
    key: "userAgent",
    label: "User Agent",
  },
  {
    key: "date",
    label: "Date",
  },

];

export default function UsageTable() {
  

  const dispatch = useAppDispatch()
  const usage = useAppSelector(selectUsage)



  let list = useAsyncList({
    async load() {
      let res = usage
      

      return {
        items: res,
      };
    },
    async sort({items, sortDescriptor}) {
      return {
        items: items.sort((a, b) => {
          // @ts-ignore
          let first = a[sortDescriptor.column];
          // @ts-ignore
          let second = b[sortDescriptor.column];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });



  return (
    <Table aria-label="Example table with dynamic content" 
    sortDescriptor={list.sortDescriptor}
    
    onSortChange={list.sort}
    >
    <TableHeader columns={columns}>
      {(column) => <TableColumn allowsSorting>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={list.items} className="dark">
      {(item) => (
        <TableRow key={item.time + item.source + item.IP + Math.random()}>
          {(columnKey) => <TableCell >{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
