import { useDispatch } from "react-redux";
import { updateCourse } from "../../redux/slicers/Courses";
import { fetchParticipants } from "../../redux/slicers/Participants";
import { AppDispatch } from "../../redux/store";
import { DateStyle } from "./Date";

export function Course(props: { course: number; id: number; key: number; }) {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <DateStyle onClick={() => {dispatch(updateCourse(props.id)); dispatch(fetchParticipants(props.id))}}>
            C{props.course}
        </DateStyle>
    )
}