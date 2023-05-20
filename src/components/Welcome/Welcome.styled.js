import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const WelcomeBox = styled.div`
  max-width: 450px;
  max-height: 350px;
  padding: 15px;
  margin: 100px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const WelcomeTitle = styled.h1`
  font-size: 34px;
  font-weight: 600;

  max-width: 350px;
  text-align: center;
  color: #fff;
`;

export const WelcomeBtn = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 190px;
  height: 50px;
  cursor: pointer;
  text-decoration: none;

  margin-left: auto;
  margin-right: auto;

  background-color: #ebd8ff;
  border-radius: 10.3108px;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  :hover,
  :focus {
    background-color: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;
