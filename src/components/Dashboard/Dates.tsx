import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchDates } from "../../redux/slicers/Dates";
import { AppDispatch, RootState } from "../../redux/store";
import { Row } from "../ui/Row";
import { Course } from "./Course";
import { Date } from "./Date";
import { Reunion } from "./Reunion";
import { useEffect } from "react";

export function Dates() {
  
  const dates = useSelector((state: RootState) => state.dates.dates)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDates());
  }, [dispatch]);

  const reunions: {id: number, numOfficiel: number, specialites: string[]}[] = useSelector((state: RootState) => state.reunions.reunions)
  const courses : {id: number, numExterne: number}[] = useSelector((state: RootState) => state.courses.courses)

  return (
    <div>
      <Row className="list">
        {dates.map((date: string) =>
          moment(date, "DDMMYYYY") >= moment().subtract(3, "days") ? <Date date={date} key={date} /> : null
        )}
      </Row>
      <Row className="list">
        {reunions.map((reunion: {id: number, numOfficiel: number, specialites: string[]}) => (
          <Reunion reunion={reunion.numOfficiel} id={reunion.id} key={reunion.id} specialites={reunion.specialites}/>
        ))}
      </Row>
      <Row className="list">
        {courses.map((course: {id: number, numExterne: number}) => (
          <Course course={course.numExterne} id={course.id} key={course.id} />
        ))}
      </Row>
    </div>
  );
}
