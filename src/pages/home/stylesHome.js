import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  box-sizing: border-box;
  padding: 20px 40px;
  max-height: 100vh;
  height: 100vh;
  max-width: 100vw;
  width: 100%;
  background-color: #24242c;
  div {
    &.container-pick-chats {
      display: block;
      grid-column-start: 1;
    }
    &.container-current-chat {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      height: 100%;
      grid-column-start: 2;
      div.all-messages-container {
        width: 100%;
      }
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.mymessage ? "flex-end" : "flex-start")};
  p {
    background-color: ${(props) => (props.mymessage ? "#005c4b" : "#202c33")};
    color: #fff;
    padding: 5px 10px;
    margin: 10px 0;
  }
`;
