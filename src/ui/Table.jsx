import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { extractTableHeader } from "@/helpers/extractTableHeader";
import React from "react";
import style from "./TableStyle.module.css";
export default function TableUi({ render, tableData, displayedClos }) {
  //   console.log(tableData);

  return (
    <div className="table-wrapper">
      <Table className={"bg-white border-0 p-0!"}>
        <TableHeader className={""}>
          <TableRow className={"border-0!"}>
            {extractTableHeader(tableData, displayedClos).map((h) => (
              <TableHead
                className={` font-bold text-black bg-gray-50 border-0  ${
                  h === "name" ? "text-left" : "text-center"
                }`}
              >
                <span className="capitalize">
                  {h === "name" ? "Product" : h === "id" ? "ProductID" : h}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>{tableData?.map(render)}</TableBody>
      </Table>
    </div>
  );
}
