import AddIcon from "@/ui/Icons/Add";
import NeoIcon from "@/ui/Icons/Neo";

function Header() {
  return (
    <header className=" py-4 flex items-center justify-between md:justify-end px-4">
      <div className=" md:hidden ">
        <NeoIcon />
      </div>

      <div className=" flex items-center justify-center gap-5">
        <p className=" text-xl text-dark-v-1 dark:text-light-v-1 hidden md:block">
          Create your build now !!
        </p>
        <div className=" w-8 h-8 flex items-center justify-center rounded-full bg-dark-v-1 dark:bg-primary">
          <button>
            <AddIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
