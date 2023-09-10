import React, { useEffect } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner} from "@nextui-org/react";
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectUsage, setUsage, fetchUsage } from "./usageTableSlice"
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
  const [data, setData] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  const dispatch = useAppDispatch()
  const usage = useAppSelector(selectUsage)

  useEffect(() => {

    // if user is on mobile hide the table
    // @ts-ignore
    if (window.innerWidth < 500) {
      return
    }

    if(!loaded) {

    // the dispatch has already been done in app so we can just use the selector
    // @ts-ignore
    setData(usage)
    setLoaded(false)
    return
    }
  }, [loaded, usage]);

  let list = useAsyncList({
    async load() {
      let res = usage
      setLoaded(true)

      return {
        items: res,
      };
    },
    async sort({items, sortDescriptor}) {
      return {
        items: items.sort((a, b) => {
          
          let first = a[sortDescriptor.column];
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
    className="">
    <TableHeader columns={columns}>
      {(column) => <TableColumn allowsSorting>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={list.items}>
      {(item) => (
        <TableRow key={item.time + item.source + item.IP + Math.random()}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  );
}
