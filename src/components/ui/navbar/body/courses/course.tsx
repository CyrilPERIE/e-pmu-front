import React, { useEffect } from "react";
import { Course as mCourse } from "../../../../../common/models/course";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../../redux/store";
import { updateCourse } from "../../../../../redux/courses/coursesSlice";
import { fetchParticipants } from "../../../../../redux/participants/participantsThunks";
import { selectReunions, selectSelectedReunion } from "../../../../../redux/reunions/reunionsSelectors";
import { date_to_hhhmm, isOver } from "../../../../../utils/date";
import { selectNavBarView } from "../../../../../redux/display/displaySelectors";
import { NavBarType } from "../../../../../services/Chevaux/types";
import { resetReunion, updateReunion } from "../../../../../redux/reunions/reunionsSlice";
import { getSpecialiteValue } from "../../../../../utils/dicts";

export type CourseProps = mCourse & {id: number}

const Course: React.FC<CourseProps> = ({id, ...course}) => {
    
    const dispatch = useDispatch<AppDispatch>();
    const reunion = useSelector(selectSelectedReunion)
    const reunions = useSelector(selectReunions)
    const navBarView = useSelector(selectNavBarView)

    const updateStore = () => {
        dispatch(updateCourse({id, ...course}))
        dispatch(fetchParticipants(id))
        if(navBarView === NavBarType.COURSES) dispatch(resetReunion)
    }

    useEffect(() => {
        const _reunion = reunions.find((reunion) => 
            reunion?.courses?.some((_course) => _course.numExterne === course.numExterne && _course.numExterneReunion === course.numExterneReunion)
        );
        if(_reunion) dispatch(updateReunion(_reunion))
    // eslint-disable-next-line
    }, [])

    return (
        <div onClick={updateStore} className="flex py-3 px-4 cursor-pointer bg-white m-2 rounded-xl">
            <div className="flex items-center bg-red mr-3">
                <div className={`${isOver(course) ? 'bg-secondary-color text-secondary-color-darker' : 'bg-background-color text-primary-color'} size-14 italic flex flex-col justify-center rounded-xl text-center`}>
                    <div><h1>R{course.numExterneReunion}</h1></div>
                    <div><h1>C{course.numExterne}</h1></div>
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between">
                    <div>
                        <div><h2>{reunion?.hippodrome?.libelleCourt}</h2></div>
                        <div><h2>{course.libelleCourt}</h2></div>
                    </div>
                    <div>
                        <p>{isOver(course) ? "Définitive" : date_to_hhhmm(course.heureDepart)}</p>
                    </div>
                </div>       
                <div>
                    <h3 className="text-secondary-color-darker">{getSpecialiteValue(course.specialite)} - {course.distance}m - {course.chevaux?.length} partants</h3>
                </div>         
            </div>
        </div>
    )
}

export default Course;