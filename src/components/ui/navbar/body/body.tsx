import { useSelector } from "react-redux";
import { NavBarType } from "../../../../services/Chevaux/types";
import Courses from "./courses/courses";
import Reunions from "./reunions/reunions";
import { selectNavBarView } from "../../../../redux/display/displaySelectors";
  
const NavBarBody = () => {
    
    const navBarView = useSelector(selectNavBarView)

    return (
        <div className="overflow-auto bg-secondary-color flex-grow">
            {navBarView === NavBarType.COURSES ? <Courses /> : NavBarType.REUNIONS ? <Reunions /> : <></>}
        </div>
    )
}

export default NavBarBody