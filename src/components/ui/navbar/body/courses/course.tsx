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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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

    // const isWaitingForResult = (course: mCourse): boolean => {
    //     if (!course.chevaux) return false;
    //     return course.chevaux.some(cheval => !cheval.ordreArrivee);
    // }

    // const isPlaceWin = (course: mCourse): boolean => {
    //     if (!course.chevaux || course.chevaux.length === 0) return false;
        
    //     // Trouver le cheval avec ordreArriveeEstime de 1
    //     const estimatedWinner = course.chevaux.find(cheval => cheval.ordreArriveeEstime === 1);
    //     if (!estimatedWinner) return false;

    //     const requiredPositions = course.chevaux.length >= 7 ? [1, 2, 3] : [1, 2];
        
    //     return requiredPositions.includes(estimatedWinner.ordreArrivee);
    // }

    const whichImage = () => {
        if(course.specialite !== 'PLAT') return renderContent('')
        // else if(isWaitingForResult(course)) return renderContent('attente')
        // else if(isPlaceWin(course)) return renderContent('gagne')
        else return renderContent('perdu')
    }

    const renderContent = (status: string) => {
        switch (status) {
            case 'gagne':
                return (
                    <div className="flex items-center">
                        <CheckCircleOutlineIcon className="text-accent-color" />
                    </div>
                );
            case 'perdu':
                return (
                    <div className="flex items-center">
                        <RemoveCircleOutlineIcon className="text-red-400" />
                    </div>
                );
            case 'attente':
                return (
                    <div className="flex items-center">
                        <AutorenewIcon className="text-orange-400" />
                    </div>
                );
            default:
                return (
                    <div>
                        <MoreHorizIcon className="text-secondary-color-darker" />
                    </div>
                );
        }
    };

    useEffect(() => {
        const _reunion = reunions.find((reunion) => 
            reunion?.courses?.some((_course) => _course.numExterne === course.numExterne && _course.numExterneReunion === course.numExterneReunion)
        );
        if(_reunion) dispatch(updateReunion(_reunion))
    // eslint-disable-next-line
    }, [])

    return (
        <div className="relative">
            <div onClick={updateStore} className="flex py-3 px-4 cursor-pointer  bg-white m-2 rounded-xl">
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
            <div className={`absolute bottom-0 right-0 w-12 h-12 bg-cover bg-center`}>
                {whichImage()}
            </div>
        </div>
    )
}

export default Course;