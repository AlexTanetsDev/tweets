import { MainImage } from "../Card/Card.styled";
import { WelcomeBox, WelcomeTitle, WelcomeBtn } from "./Welcome.styled";
import { Container } from "../Container";

export const Welcome = () => {
  return (
    <Container>
      <WelcomeBox>
        <MainImage />
        <WelcomeTitle>Welcome to the tweets app!</WelcomeTitle>
        <WelcomeBtn to={"/tweets"}>Tweets</WelcomeBtn>
      </WelcomeBox>
    </Container>
  );
};
