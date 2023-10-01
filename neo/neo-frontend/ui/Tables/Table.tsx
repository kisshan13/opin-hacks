import React from "react";

function TableMain({ children }: { children: React.ReactNode }) {
  return (
    <table className=" table w-full border-separate border-spacing-y-2">
      {children}
    </table>
  );
}

function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className=" pb-2 row">{children}</tr>;
}

function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <th className=" text-start font-medium text-dark-v-1/80 dark:text-light-v-1/80 text-sm ">
      {children}
    </th>
  );
}

function TableDef({ children }: { children: React.ReactNode }) {
  return (
    <td className=" py-3 my-3 dark:text-light-v-1 text-lg font-medium bg-light-v-2 dark:bg-dark-v-1 whitespace-nowrap min-w-[150px]">
      {children}
    </td>
  );
}

const Table = {
  Table: TableMain,
  Row: TableRow,
  Head: TableHead,
  Defination: TableDef,
};

export default Table;
