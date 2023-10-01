function LayoutOnBoard({ title, children }) {
  return (
    <div className=" flex flex-col py-5 px-5 h-full  justify-between">
      <div>
        <h1 className="  text-2xl font-medium ">{title}</h1>

        <div className=" mt-9">{children}</div>
      </div>

      <p className=" text-light-black text-center ">
        By signing up, you agree to our{" "}
        <span className=" text-primary"> terms & condition</span> and
        <span className=" text-primary">privacy policy</span>
      </p>
    </div>
  );
}

export default LayoutOnBoard;
