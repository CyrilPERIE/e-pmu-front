import React from "react";
import styled from "styled-components";

const TableStyle = styled.table<{}>(({ }) => ({
  minWidth: "100%",
  textAlign: "center",
  borderCollapse: "collapse",
  thead: {
    fontFamily: "Quicksand-Bold",
    lineHeight: "5rem",
  },
  tbody: {},
}));

interface Props {
  children: React.ReactNode;
  columns: string[];
}

export function Table({ columns, children }: Props) {
  return (
    <TableStyle>
      <thead>
        <tr>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </TableStyle>
  );
}
