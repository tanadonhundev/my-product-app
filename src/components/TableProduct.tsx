import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "../style/TableProduct.css"; // Import the CSS file
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditLocation, EditOutlined } from "@mui/icons-material";

// Define the data type
type ProductData = {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  quantity: number;
  deleteAction?: boolean;
  editAction?: boolean;
};

export default function TableProduct() {
  const data: ProductData[] = [
    {
      id: 1,
      name: "น้ำผลไม้",
      price: "50",
      category: "เครื่องดื่ม",
      description: "น้ำผลไม้สด",
      quantity: 50,
      deleteAction: false,
    },
    {
      id: 2,
      name: "ขนมปัง",
      price: "30",
      category: "ขนม",
      description: "ขนมปังโฮลวีต",
      quantity: 50,
    },
    {
      id: 3,
      name: "โทรศัพท์",
      price: "15000",
      category: "เครื่องใช้ไฟฟ้า",
      description: "โทรศัพท์มือถือ",
      quantity: 20,
    },
  ];

  // Create a column helper instance
  const columnHelper = createColumnHelper<ProductData>();

  // Define the columns using columnHelper
  const columns = [
    columnHelper.accessor("editAction", {
      header: "ลบ",
      cell: () => (
        <IconButton
          // onClick={() => handleDelete(info.row.index)} // handleDelete is the function to handle the delete action
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      ),
    }),
    columnHelper.accessor("name", {
      header: "ชื่อสินค้า",
      cell: ({ getValue }) => getValue(),
    }),
    columnHelper.accessor("price", {
      header: "ราคา",
      cell: ({ getValue }) => getValue(),
    }),
    columnHelper.accessor("category", {
      header: "หมวดหมู่",
      cell: ({ getValue }) => getValue(),
    }),
    columnHelper.accessor("quantity", {
      header: "จำนวน",
      cell: ({ getValue }) => getValue(),
    }),
    columnHelper.accessor("description", {
        header: "คำอธิบาย",
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor("editAction", {
        header: "แก้ไข",
        cell: () => (
          <IconButton
            // onClick={() => handleDelete(info.row.index)} // handleDelete is the function to handle the delete action
            color="warning"
          >
            <EditOutlined/>
          </IconButton>
        ),
      }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
