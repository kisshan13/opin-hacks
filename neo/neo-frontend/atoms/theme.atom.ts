import { atom } from "jotai";

const themeAtom = atom({
  dark: false,
  fromLocalStorage: false,
});

export const themeAtomCallback = atom((get) => {
  if (get(themeAtom).fromLocalStorage) {
    console.log("here");
    localStorage.setItem("theme", `${get(themeAtom).dark}`);
    if (get(themeAtom).dark) {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }
  }
  return 12;
});

export default themeAtom;
