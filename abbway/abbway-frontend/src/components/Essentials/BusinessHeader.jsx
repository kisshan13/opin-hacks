import { Link, useResolvedPath } from "react-router-dom";

function BusinessHeader() {
  const { pathname } = useResolvedPath();

  return (
    <div>
      <header className=" flex justify-between items-center">
        <div>
          <h1 className=" text-3xl font-semibold">
            <span className=" text-primary-business">Abb</span>way
          </h1>
          <p className=" text-xs">for businesses</p>
        </div>

        {pathname !== "/onboard" ||
          (!hide && (
            <Link
              to={"/onboard"}
              className=" bg-primary-business px-5 py-2 rounded-3xl text-sm text-white"
            >
              Create your business account
            </Link>
          ))}
      </header>
    </div>
  );
}

export default BusinessHeader;
