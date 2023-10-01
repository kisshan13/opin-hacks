import { Modal } from "../../lib/constant";
import state from "../../state";

function Header() {
  //TODO: Handler the user profile thing
  return (
    <div>
      <header className=" flex items-center justify-between">
        <h1 className=" text-3xl font-semibold">
          <span className=" text-primary">Abb</span>way
        </h1>

        <nav>
          <button
            className=" text-primary font-medium"
            onClick={() => (state.modal = Modal.userOnBoard)}
          >
            Login / Signup
          </button>
        </nav>
      </header>
    </div>
  );
}

export default Header;
