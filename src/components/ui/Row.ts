import styled from "styled-components";

export const Row = styled.div<{ size?: number }>(({ size = 1 }) => ({
  display: "flex",
  flexDirection: "row",
  flex: size,
  padding: "1rem",
}));
