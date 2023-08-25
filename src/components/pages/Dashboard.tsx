import { Participants } from "../Dashboard/Participant";
import { Dates } from "../Dashboard/Dates";
import { Column } from "../ui/Column";
import { Row } from "../ui/Row";
import styled from "styled-components";
import { Main } from "../Main";

const GreenStyle = styled.div<{}>(() => ({
  backgroundColor: "rgb(1, 85, 77)",
}));

export function Dashboard() {
  return (
    <Main>
      <div className="full-width">
        <GreenStyle className="content-container rounded">
          <Dates />
        </GreenStyle>
        <Row>
          <Column className="content-container rounded ">
            <Participants />
          </Column>
        </Row>
      </div>
    </Main>
  );
}
