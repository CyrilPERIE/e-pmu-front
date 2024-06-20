import NavBar from "./ui/navbar/navbar";
import Dashboard from "./ui/dashboard/dashboard";
import { useSelector } from "react-redux";
import { selectSelectedCourse } from "../redux/courses/coursesSelectors";

const Main: React.FC = () => {
  
  const course = useSelector(selectSelectedCourse)

  return (
    <div className="h-screen flex flex-col bg-background-color">
      <div className="h-[97%] xl:px-[6%] flex">
        <div className={`flex-[5] h-full ${course ? 'block' : 'hidden'} xl:block`}>
          <Dashboard />
        </div>
        <div className={`flex-[2] h-full ${course ? 'hidden' : 'block'} xl:block`}>
          <NavBar />
        </div>
      </div>
      <div className="flex flex-grow justify-end gap-4 bg-black">
          <div className="text-primary-color">linkedin</div>
          <div className="text-primary-color">github</div>
      </div>
    </div>
  );
};

export default Main;
