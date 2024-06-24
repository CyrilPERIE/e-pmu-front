import { useSelector } from "react-redux";
import { Participant as mParticipant } from "../../../../../common/models/participant";
import { selectSelectedCourse } from "../../../../../redux/courses/coursesSelectors";
import { getSexeValue } from "../../../../../utils/dicts";

export type ParticipantProps = mParticipant & {id: number};

const Participant: React.FC<ParticipantProps> = ({id, ...participant}) => {

    const course = useSelector(selectSelectedCourse)
    return (
        <tr className="border-b">
            <td className="p-2 px-3">
                <div className={`flex gap-2 ${participant.ordreArriveeEstimee === 1 ? 'bg-yellow-200' : 'bg-secondary-color'} py-2 px-1 rounded-lg items-center justify-center`}>
                    <div>{participant.numPmu}</div>
                    <div className="w-[22px]"><img draggable='false' src={participant.urlCasaque} alt="ulr_casaque" /></div>
                </div>
            </td>
            <td className="flex flex-col pl-4">
                <div><p className="font-semibold">{participant.nom}</p></div>
                <div><h3 className="text-secondary-color-darker">{participant.driver}/{participant.entraineur}</h3></div>
            </td>
            <td>
                <div className="flex flex-col items-center">
                    <div><h3>{getSexeValue(participant.sexe)}</h3></div>
                    <div><h3>{participant.age}</h3></div>
                </div>
            </td>
            <td>
                <div className="flex flex-col items-center">
                    <h3>{course?.distance}m</h3>
                </div>
            </td>
            <td>
                <div className="flex flex-col items-center">
                    <h3>{participant?.musique}m</h3>
                </div>
            </td>
            <td>
                <div className="flex flex-col items-center">
                    <div>{participant.ordreArriveeEstimee ? participant.ordreArriveeEstimee : " _ "} / {participant.ordreArrivee ? participant.ordreArrivee: " - "}</div>
                </div>
            </td>
        </tr>
    )
}

export default Participant