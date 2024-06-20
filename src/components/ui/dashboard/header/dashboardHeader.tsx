import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCourse } from "../../../../redux/courses/coursesSelectors";
import { date_to_hhhmm, isOver } from "../../../../utils/date";
import { selectSelectedReunion } from "../../../../redux/reunions/reunionsSelectors";
import { resetCourse } from "../../../../redux/courses/coursesSlice";
import { getSpecialiteValue, getCordeValue } from "../../../../utils/dicts";

const DashboardHeader = () => {

    const dispatch = useDispatch()

    const course = useSelector(selectSelectedCourse)
    const reunion = useSelector(selectSelectedReunion)

    const date_str = course ? 
         isOver(course) ?  
            "Arrivée définitive" 
            : "Départ à "+date_to_hhhmm(course.heureDepart) 
        : "nan"

    const resetSelectedCourse = () => {
        dispatch(resetCourse())
    }
    return (
        <div className="p-9">
            <div>
                <div className="mb-2 xl:hidden cursor-pointer h-[32px] w-[40px] p-2 px-2 bg-background-color rounded-lg flex items-center" onClick={resetSelectedCourse}>
                    <img className="invert" src="/assets/images/arrow-exit.png" alt="Left Arrow" />
                </div>
                <div>
                    <p className="text-accent-color">{date_str}</p>
                </div>
                <div className="my-4">
                    <div className="mb-1">
                        <h1 className="text-primary-color text-2xl italic">R{course?.numExterneReunion} {reunion?.hippodrome?.libelleCourt}</h1>
                    </div>
                    <div>
                        <h1 className="text-primary-color text-2xl italic">C{course?.numExterne} {course?.libelle}</h1>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-primary-color">{course ? getSpecialiteValue(course.specialite) : ""} · {course?.distance}m · {course?.montantPrix}€ · {reunion?.audience} · {course ? getCordeValue(course.corde) : ""} · {reunion?.meteo?.forceVent}km/h · {reunion?.meteo?.temperature}°C · {reunion?.meteo?.nebulositeLibelleCourt}</h3>
            </div>
        </div>
    )
}

export default DashboardHeader;