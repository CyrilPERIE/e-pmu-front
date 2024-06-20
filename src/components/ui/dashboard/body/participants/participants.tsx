import { useSelector } from "react-redux"
import { selectParticipants } from "../../../../../redux/participants/participantsSelectors"
import Participant, { ParticipantProps } from "./participant"

const Participants = () => {

    const participants = useSelector(selectParticipants)

    const assignRankings = (participants: ParticipantProps[]) => {
            const sortedParticipants = [...participants].sort((a, b) => a.ordreArriveeEstimee - b.ordreArriveeEstimee);
        
            return sortedParticipants.map((participant, index) => ({
              ...participant,
              ordreArriveeEstimee: index + 1
            }));
    };

    return (
        <div className="w-full flex p-6 px-8">
          <table className="table-auto w-[80%]">
            <thead className="border-collapse border-t border-b">
                <tr>
                    <th>N°</th>
                    <th><div>
                            <div>Cheval</div>
                            <div>Driver / Entraineur</div>
                        </div>
                    </th>
                    <th>
                        <div>
                            <div>Sexe</div>
                            <div>Âge</div>
                        </div>
                    </th>
                    <th>Distance</th>
                    <th>Dernières Perfs.</th>
                    <th>
                        <div>
                            <div>Estimé/Réel</div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {assignRankings([...participants]).sort((participant_a: ParticipantProps, participant_b: ParticipantProps) => participant_a.placeCorde - participant_b.placeCorde).map((particpant: ParticipantProps) => (
                    <Participant key={particpant.id} {...particpant}/>
                ))}
            </tbody>
          </table>
        </div>
    )
}

export default Participants