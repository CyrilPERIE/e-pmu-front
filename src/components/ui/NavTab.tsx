import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavTabContainer = styled.a<{}>(() => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  gap: "1em",
  marginBottom: "1.5rem",
  paddingLeft: "1em",
  borderRadius: 10,
  backgroundColor: "wheat",
  fontFamily: "Quicksand-SemiBold",
  img: {
    width: 32,
  },
  "p, p:visited, p:hover, p:active": {
    color: "black",
    textDecoration: "none",
  },
}));

export default function NavTab({
  text,
  imgUrl,
  path,
}: {
  text: string;
  imgUrl: string;
  path: string;
}) {
  return (
    <NavLink to={path}>
      <NavTabContainer>
        <img src={imgUrl} alt={imgUrl} />
        <p className="big">{text}</p>
      </NavTabContainer>
    </NavLink>
  );
}
