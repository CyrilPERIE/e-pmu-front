import { useSelector } from 'react-redux';
import { selectSelectedCourse } from '../../../redux/courses/coursesSelectors';
import DashboardHeader from './header/dashboardHeader';
import DashboardBody from './body/dashboardBody';

const Dashboard = () => {

  const selectedCourse = useSelector(selectSelectedCourse);

  return (
    <div className="h-full bg-gradient-to-r from-foreground-color-lightest via-foreground-color-lighter to-foreground-color">
      {selectedCourse ? 
          <div className="flex flex-col h-full">
              <DashboardHeader />
              <DashboardBody />
              <div className="h-5 bg-primary-color"></div>
          </div>
      :
          <div className="size-full bg-dashboard-empty bg-cover"></div> 
      
      }

    </div>
  );
};

export default Dashboard;
