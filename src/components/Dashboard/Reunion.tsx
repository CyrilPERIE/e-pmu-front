import { DateStyle } from "./Date";
import { useDispatch } from "react-redux";
import { updateReunion } from "../../redux/slicers/Reunions";
import { AppDispatch } from "../../redux/store";
import { fetchCourses } from "../../redux/slicers/Courses";
import { resetParticipants } from "../../redux/slicers/Participants";
import { Row } from "../ui/Row";


export function Reunion(props: { reunion: number; id:number; key: number; specialites: string[]}) {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <DateStyle onClick={() => {dispatch(updateReunion(props.id)); dispatch(fetchCourses(props.id)); dispatch(resetParticipants())}}>
            R{props.reunion}
        </DateStyle>
    )
}