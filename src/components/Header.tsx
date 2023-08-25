import styled from "styled-components";

const HeaderStyle = styled.header<{}>(({}) => ({
  gap: "30rem",
}));

export function Header({ name }: { name: string }) {
  return (
    <HeaderStyle>
      <span style={{ fontFamily: "Quicksand-Regular", color: "white" }}>Pages /</span>{" "}
      <span style={{ fontFamily: "Quicksand-SemiBold", color: "white" }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      <br />
      <br />
      <span
        style={{
          fontFamily: "Quicksand-Bold",
          color: "wheat",
          fontSize: "24px",
        }}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
    </HeaderStyle>
  );
}
