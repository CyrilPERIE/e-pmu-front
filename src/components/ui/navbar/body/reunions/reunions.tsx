import { useSelector } from "react-redux";
import Reunion, { ReunionProps } from "./reunion";
import { RootState } from "../../../../../redux/store";
const Reunions = () => {
    
    const reunions = useSelector((state: RootState) => state.reunions.reunions);

    document.querySelectorAll('.scrollIntoView').forEach(element => {
        element.addEventListener('click', () => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    return (
        <div>
            {reunions.map((reunion: ReunionProps) => (
                <Reunion key={reunion.id} {...reunion}/>
            ))}
        </div>
    )
}

export default Reunions;