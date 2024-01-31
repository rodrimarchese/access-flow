import React from "react";

// Ejemplo de uso --------------------------------------------
const columns = [
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "Nombre", dataIndex: "name", key: "name" },
  // ...otros campos
];

const data = [
  { id: "001", name: "John Doe" /* ...otros campos */ },
  { id: "002", name: "Jane Doe" /* ...otros campos */ },
  // ...otros datos
];

//  --------------------------------------------

type Column = {
  title: string;
  dataIndex: string;
  key: string;
};

type Data = {
  [key: string]: string;
};

export function GenericTable({
  columns,
  data,
}: {
  columns: Column[];
  data: Data[];
}) {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-6 py-3">
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4">
                  {row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
