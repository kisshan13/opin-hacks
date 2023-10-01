function Container({ children }) {
  return <table className=" table w-full">{children}</table>;
}

function HeadRow({ children }) {
  return <tr className=" bg-primary-business/10">{children}</tr>;
}

function Head({ children }) {
  return <th className=" text-sm font-medium p-3 text-left">{children}</th>;
}

function Row({ children, bg }) {
  return <tr className={bg && "bg-light-black/20"}>{children}</tr>;
}

function Def({ children }) {
  return <td className=" text-left px-3 py-2">{children}</td>;
}

const Table = {
  Container,
  Row,
  Def,
  Head,
  HeadRow,
};

export default Table;
