import styled from "styled-components/native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("./assets/backgroundimage.jpg"),resizeMode :"cover",
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;