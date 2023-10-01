import { useSnapshot } from "valtio";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

import state from "../../state";
import modals from "../../lib/Modal";
import Header from "../Essentials/Header";

function MainLayout() {
  const snap = useSnapshot(state);

  return (
    <div className=" px-5 py-1">
      <Header />
      <Outlet />

      <AnimatePresence>
        {snap.modal && (
          <div className=" w-screen flex justify-center items-center h-screen bg-black/70 fixed top-0 left-0">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
            >
              {modals[snap.modal]}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Toaster />
    </div>
  );
}

export default MainLayout;
