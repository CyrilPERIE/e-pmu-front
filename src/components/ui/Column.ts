import styled from "styled-components";

export const Column = styled.div<{ size?: number }>(({ size = 1 }) => ({
  display: "flex",
  flexDirection: "column",
  flex: size,
  padding: "1rem",
}));
