import { useResolvedPath } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useSnapshot } from "valtio";
import sidebarState from "./state";

function Container({ children }) {
  const sidebar = useSnapshot(sidebarState);

  // useEffect(() => {
  //   const event = (e) => {
  //     if (e.target.id !== "side-bar") {
  //       sidebarState.show = false;
  //       setAddEventListner(true);
  //     }
  //   };
  //   if (sidebar.show) {
  //     window.addEventListener("click", event);
  //   } else {
  //     window.removeEventListener("click", event);
  //   }

  //   return () => window.removeEventListener("click", event);
  // }, [sidebar.show]);

  return (
    <>
      <div
        id="side-bar"
        className={twMerge([
          " -translate-x-56  z-[999] md:translate-x-0 w-56 xl:w-64 2xl:w-64 h-screen fixed top-0 left-0 bg-content1 px-3 py-4 rounded-md transition-all ",
          sidebar.show && " translate-x-0",
          "bg-primary-business rounded-none",
        ])}
      >
        <div>{children}</div>
      </div>
      {sidebar.show && (
        <div
          className=" w-screen z-40 h-screen fixed top-0 left-0 md:hidden"
          onClick={() => (sidebarState.show = false)}
        />
      )}
    </>
  );
}

function Brand({ children }) {
  return <div className=" pt-1 pb-10">{children}</div>;
}

function Group({ children, title }) {
  return (
    <>
      <div className=" mb-8">
        <p className=" text-xs uppercase text-white/70 font-medium">{title}</p>
        <div className=" flex flex-col gap-[5px] mt-1">{children}</div>

        {/* <div className=" w-full h-[2px] bg-white/25 rounded mt-5"></div> */}
      </div>
    </>
  );
}

function Item({ children, title, path, active }) {
  //   const { pathname } = useResolvedPath();
  const { show } = useSnapshot(sidebarState);
  return (
    <div
      className={twMerge([
        "text-lg opacity-70 cursor-pointer pt-2 ",
        active && "opacity-100",
      ])}
      onClick={() => (sidebarState.show = !show)}
    >
      {children}
    </div>
  );
}

function Toggle({ children }) {
  const { show } = useSnapshot(sidebarState);

  return (
    <button onClick={() => (sidebarState.show = !show)}>{children}</button>
  );
}

function ItemGroup({ children }) {
  return <div className=" flex flex-col gap-[5px] mt-1">{children}</div>;
}

const Sidebar = {
  Container,
  Group,
  Item,
  Brand,
  ItemGroup,
  Toggle,
};

export default Sidebar;
