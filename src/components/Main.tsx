import NavBar from "./ui/navbar/navbar";
import Dashboard from "./ui/dashboard/dashboard";
import { useSelector } from "react-redux";
import { selectSelectedCourse } from "../redux/courses/coursesSelectors";

const Main: React.FC = () => {
  
  const course = useSelector(selectSelectedCourse)

  return (
    <div className="h-screen flex flex-col bg-background-color select-none">
      <div className="h-[97%] xl:px-[6%] flex">
        <div className={`flex-[5] h-full ${course ? 'block' : 'hidden'} xl:block`}>
          <Dashboard />
        </div>
        <div className={`flex-[2] h-full ${course ? 'hidden' : 'block'} xl:block`}>
          <NavBar />
        </div>
      </div>
      <div className="flex flex-grow justify-center gap-10 bg-black">
          <div className="text-accent-color uppercase font-bold cursor-pointer hover:underline hover:font-extrabold" onClick={() => window.open('https://www.linkedin.com/in/cyril-perie/', '_blank')}>linkedin</div>
          <div className="text-accent-color uppercase font-bold cursor-pointer hover:underline hover:font-extrabold" onClick={() => window.open('https://github.com/CyrilPERIE', '_blank')}>github</div>
      </div>
    </div>
  );
};

export default Main;
