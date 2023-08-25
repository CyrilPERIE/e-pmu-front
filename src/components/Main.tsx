import { Column } from "./ui/Column";
import NavTab from "./ui/NavTab";
import { Row } from "./ui/Row";
import { ReactNode, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";
import { logout } from "../redux/slicers/User";

interface Props {
  children?: ReactNode;
}

export function Main({ children }: Props) {
  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  
  const user = useSelector((state: RootState) => state.user.user)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("useeffect de fou")
    if(parseInt(user.exp) > Date.now()) dispatch(logout())
  }, [pathname]);

  return (
    <div className="app">
      <Column>
        <Row>
          <div className="homme-bouton">
            <img
              src="/assets/images/(l)ico(r)ne_cheval.png"
              alt="/assets/images/(l)ico(r)ne_cheval.png"
            />
            <p>EPMU</p>
          </div>
        </Row>
        <hr />
        <Row size={9} className="side-nav-content">
          <Column>
            <NavTab
              text="Dashboard"
              imgUrl="/assets/images/icone_dashboard.png"
              path="/dashboard"
            />
            <NavTab
              text="Report"
              imgUrl="/assets/images/icone_rapport.png"
              path="/report"
            />
            <NavTab
              text="Stats"
              imgUrl="/assets/images/icone_stats.png"
              path="/stats"
            />
            <NavTab
              text="Admin"
              imgUrl="/assets/images/icone_admin.svg"
              path="/admin"
            />
          </Column>
        </Row>
      </Column>
      <Column size={6}>
        <Row>
          <Header name={pathname} />
        </Row>
        <Row size={12} className="section">
          {children}
        </Row>
      </Column>
    </div>
  );
}
