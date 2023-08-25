import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Table } from "../ui/Table";
import { TableRow } from "../ui/TableRow";

export function Participants() {
  const participants = useSelector((state: RootState) => state.participants.participants)

  return (
    <div className="full-width">
      <Table columns={["#", "Participant", "Côte", "Estimation", "Ordre Arrivée"]}>
        {participants.map((participant) => (
          <TableRow participant={participant} key={participant.id}/>
        ))}
      </Table>
    </div>
  );
}
