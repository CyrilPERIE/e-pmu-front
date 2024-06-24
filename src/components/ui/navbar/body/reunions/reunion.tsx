import { useDispatch, useSelector } from "react-redux";
import { resetReunion, updateReunion } from "../../../../../redux/reunions/reunionsSlice";
import { Reunion as mReunion } from "../../../../../common/models/reunion";
import { fetchCourses } from "../../../../../redux/courses/coursesThunks";
import { AppDispatch } from "../../../../../redux/store";
import Course, { CourseProps } from "../courses/course";
import { selectCourses } from "../../../../../redux/courses/coursesSelectors";
import { selectSelectedReunion } from "../../../../../redux/reunions/reunionsSelectors";
import { date_to_hhhmm } from "../../../../../utils/date";
import { resetCourses } from "../../../../../redux/courses/coursesSlice";
import { getSpecialiteValue } from "../../../../../utils/dicts";

export type ReunionProps = mReunion & {id: number};

const Reunion: React.FC<ReunionProps> = ({id, ...reunion}) => {
    
    const dispatch = useDispatch<AppDispatch>();

    const selectedReunion = useSelector(selectSelectedReunion);
    const courses = useSelector(selectCourses);

    const updateStore = () => {
        if(selectedReunion?.id_programme === reunion.id_programme && selectedReunion?.numExterne === reunion.numExterne) {
            dispatch(resetReunion())
            dispatch(resetCourses())
        }
        else {
            dispatch(updateReunion({id, ...reunion}))
            dispatch(fetchCourses(id))
        }
    }

    const isReunionOver = (reunion: mReunion): string => {
        if(!reunion.courses) return ""
        const sorted_courses_by_date = [...reunion.courses].sort((a,b) => a.heureDepart - b.heureDepart)
        const first_course = sorted_courses_by_date[0]
        const last_course = sorted_courses_by_date[sorted_courses_by_date.length -1]
        if(new Date() > new Date(last_course.heureDepart)) return "Terminée"
        return date_to_hhhmm(first_course.heureDepart)
    }
    
    const specialites = () => {
        const extractValues = [...reunion.specialites]
        return extractValues.map((specialite) => getSpecialiteValue(specialite)).join(" . ")
    }
    return (
        <div>
            <div className="m-2">
                <div onClick={updateStore} className="flex flex-col py-3 px-4 cursor-pointer bg-white m-2 rounded-xl">
                    <div className="flex justify-between">
                        <div>
                            <h1>R{reunion.numOfficiel} {reunion.hippodrome?.libelleCourt}</h1>
                        </div>
                        <div>
                            <p>{isReunionOver(reunion)}</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-secondary-color-darker">{reunion.meteo?.nebulositeLibelleCourt} . {reunion.courses?.length} courses {specialites()}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-2">
                <div className="px-2">
                {selectedReunion?.id === id ? courses.map((course: CourseProps) => (
                        <Course key={course.id} {...course} />
                    ))
                    :
                    <></>
                }
                </div>
            </div>
        </div>
        
    )
}

export default Reunion