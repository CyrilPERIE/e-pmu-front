import { useDispatch } from "react-redux";
import styled from "styled-components";
import { resetCourses } from "../../redux/slicers/Courses";
import { updateDate } from "../../redux/slicers/Dates";
import { resetParticipants } from "../../redux/slicers/Participants";
import { fetchReunions } from "../../redux/slicers/Reunions";
import { AppDispatch } from "../../redux/store";

export const DateStyle = styled.div<{}>(() => ({
    backgroundColor: "white",
    height: "3.2rem",
    width: "3.2rem",
    padding: ".8rem",
    fontSize: "1.3rem",
    fontFamily: "Quicksand-Medium",
    whiteSpace: "normal",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".5rem",
}));


export function Date(props: { date: string; key: string; }) {
    const dispatch = useDispatch<AppDispatch>();

    const mois = ["JAN", "FEV", "MAR", "AVR", "MAI", "JUIN", "JUIL", "AOU", "SEP", "OCT", "NOV", "DEC"]
    const displayDate = {
        jour: props.date.substring(0, 2),
        mois: props.date.substring(2, 4),
        an: props.date.substring(4, 8)
    }
    return (
        <DateStyle onClick={() => { dispatch(updateDate(props.date)); dispatch(fetchReunions(props.date)); dispatch(resetCourses()); dispatch(resetParticipants()) }}>
            {displayDate.jour}
            <br />
            {mois[Number(displayDate.mois) - 1]}
            <br />
            {displayDate.an}
        </DateStyle>
    )
}