import { date_to_string } from "../../../../utils/date";
import { useDispatch, useSelector } from "react-redux";
import { updateDate } from "../../../../redux/dates/datesSlice";
import { AppDispatch, RootState } from "../../../../redux/store";
import { fetchReunions } from "../../../../redux/reunions/reunionsThunks";
import { resetCourses } from "../../../../redux/courses/coursesSlice";
import { setNavBarViewCourses, setNavBarViewReunions } from "../../../../redux/display/displaySlice";
import { selectNavBarView } from "../../../../redux/display/displaySelectors";
import { NavBarType } from "../../../../services/Chevaux/types";

const NavBarHeader = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const selectedDate = useSelector((state: RootState) => state.dates.selectedDate);
    const navBarView = useSelector(selectNavBarView)

    const decreaseDate = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() - 1);
        updateStore(newDate)
    };
    
    const increaseDate = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 1);
        updateStore(newDate)
    };
    
    const updateStore = (newDate: Date) => {
        dispatch(updateDate(newDate.toISOString()));
        dispatch(fetchReunions(newDate.toISOString()));
        dispatch(resetCourses());
    }

    const switchNavBarToCourses = () => {
        dispatch(setNavBarViewCourses())
    }

    const switchNavBarToReunions = () => {
        dispatch(setNavBarViewReunions())
    }

    return (
        <div className="p-2 py-3 bg-primary-color">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <div>Cal.</div>
                    <div><h1>{date_to_string(selectedDate)}</h1></div>
                </div>
                <div className="flex gap-3">
                    <div className="bg-secondary-color p-1 rounded-[14px] flex w-[39px] h-[42px] cursor-pointer justify-center items-center" onClick={decreaseDate}>
                            <img className="h-4" src="/assets/images/left-arrow.png" alt="Left Arrow" />
                    </div>
                    <div className="bg-secondary-color p-1 rounded-[14px] flex w-[39px] h-[42px] cursor-pointer justify-center items-center" onClick={increaseDate}>
                            <img className="h-4" src="/assets/images/right-arrow.png" alt="Left Arrow" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex p-2 px-5 bg-secondary-color max-w-fit rounded-3xl items-center">
                    <div className={`${navBarView === NavBarType.COURSES ? 'bg-primary-color text-foreground-color' : 'text-secondary-color-darker'} p-1 px-5 rounded-full`}>
                        <button onClick={switchNavBarToCourses}>
                            Courses
                        </button>
                    </div>
                    <div className={`${navBarView === NavBarType.REUNIONS ? 'bg-primary-color text-foreground-color' : 'text-secondary-color-darker'} p-1 px-5 rounded-full`}>
                        <button onClick={switchNavBarToReunions}>
                            Réunions
                        </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NavBarHeader;