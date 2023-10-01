function BusinessCard({ children }) {
  return (
    <div className=" rounded-md border border-light-black/20 shadow-md px-3 py-1">
      {children}
    </div>
  );
}

export default BusinessCard;
