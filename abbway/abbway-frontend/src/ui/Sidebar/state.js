import { proxy } from "valtio";

const sidebarState = proxy({
  show: false,
});

export default sidebarState;
