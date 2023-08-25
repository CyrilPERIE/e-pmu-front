import styled from "styled-components";

const RowStyle = styled.tr<{}>(() => ({
  textAlign: "center",
  td: {
    paddingTop: ".3rem",
    paddingBottom: ".3rem",
    borderTop: "1px solid #D3D3D3",
    img: {
      width: "3rem",
    },
  },
}));

const Align = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: "1rem",
}));

export function TableRow({participant}: any) {
  return (
    <RowStyle>
      <td>{participant.numPmu}</td>
      <td>
        <Align>
          <img src={participant.urlCasaque} alt={participant.urlCasaque} />
          {participant.nom}
        </Align>
      </td>
      <td> - </td>
      <td> {participant.ordreArriveeEstimee} </td>
      <td>{participant.ordreArrivee}</td>
    </RowStyle>
  );
}
