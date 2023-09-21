import styled from "@emotion/styled";

export const Container = styled.div``;

export const RoomItem = styled.div`
  background-color: ${(props) => (props.selected ? "#2a3942" : "transparent")};
`;
