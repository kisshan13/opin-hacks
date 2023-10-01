import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";

import useSubdomain from "./lib/subdomains";
import { subdomains } from "./lib/constant";

import BusinessLayout from "./components/Layout/BusinessLayout";

import LandingPage from "./pages/user/Landing";
import LandingBusiness from "./pages/business/Landing";
import OnboardBusiness from "./pages/business/Onboard";
import VerifyPage from "./pages/business/Verify";
import OverviewPage from "./pages/business/Overview";
import BusinessDashbaordLayout from "./components/Layout/BusinessDashboardLayout";
import Tickets from "./pages/business/Tickets";
import BusPage from "./pages/business/Bus";
import SearchPage from "./pages/user/SearchPage";

function App() {
  const subdomain = useSubdomain();

  console.log(subdomain);

  return (
    <div className=" font-dm">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<LandingPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
          <>
            <Route path="/" element={<BusinessLayout />}>
              <Route path="" element={<LandingBusiness />} />
              <Route path="onboard" element={<OnboardBusiness />} />
              <Route path="verify" element={<VerifyPage />} />
            </Route>
            <Route element={<BusinessDashbaordLayout />}>
              <Route path="/overview" element={<OverviewPage />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/bus" element={<BusPage />} />
              <Route path="/routes" element={<OverviewPage />} />
              <Route path="/settings" element={<OverviewPage />} />
            </Route>
          </>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
