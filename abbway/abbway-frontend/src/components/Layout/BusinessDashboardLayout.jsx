import { Link, Outlet, useResolvedPath } from "react-router-dom";
import Sidebar from "../../ui/Sidebar/Sidebar";
import Container from "../../ui/Sidebar/Container";
import BusinessHeader from "../Essentials/BusinessHeader";

const links = [
  { group: "Overview", links: ["Overview", "Tickets"] },
  { group: "Bus", links: ["Bus", "Routes"] },
  { group: "Others", links: ["Settings"] },
];

function BusinessDashbaordLayout() {
  const { pathname } = useResolvedPath();

  return (
    <div>
      <Sidebar.Container>
        {links?.map((l, i) => (
          <Sidebar.Group title={l.group}>
            {l.links?.map((link) => (
              <Sidebar.Item active={pathname === `/${link.toLowerCase()}`}>
                <Link to={`/${link?.toLowerCase()}`} className=" text-white">
                  {link}
                </Link>
              </Sidebar.Item>
            ))}
          </Sidebar.Group>
        ))}
      </Sidebar.Container>
      <Container>
        <div className=" px-3 py-1">
          <BusinessHeader hide={true} />
        </div>

        <div className=" px-3 mt-6">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}

export default BusinessDashbaordLayout;
