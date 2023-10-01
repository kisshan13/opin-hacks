import React from "react";

function TableContainer({ children }: { children: React.ReactNode }) {
  return <div className=" overflow-x-scroll md:scrollbar-hide ">{children}</div>;
}

export default TableContainer;
