import { useSelector } from "react-redux";
import { selectReunions } from "../../../../../redux/reunions/reunionsSelectors";
import Course, { CourseProps } from "./course";

const Courses = () => {
    
    const reunions = useSelector(selectReunions)
    const sorted_courses_by_date_from_reunions = (): CourseProps[] => {

        const courses = reunions.flatMap(reunion => reunion.courses);
        const filteredList = courses.filter((course): course is CourseProps => course !== undefined);
        if(!filteredList) return []
        return filteredList.sort((a, b) => a.heureDepart - b.heureDepart);

    }

    return (
        <div>
            {sorted_courses_by_date_from_reunions().map((course) => <Course key={course.id} {...course} />)}
        </div>
    )
}

export default Courses;