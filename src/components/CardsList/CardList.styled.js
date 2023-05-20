import styled from "styled-components";

export const List = styled.ul`
  padding: 50px 0 50px;
  max-width: 380px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1200px) {
    max-width: calc(380px * 3 + 40px);
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;

export const Item = styled.li`
  width: 380px;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 180px;
  height: 50px;
  cursor: pointer;

  margin-left: auto;
  margin-right: auto;

  background-color: #ebd8ff;
  border-radius: 10.3108px;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  :hover,
  :focus {
    background-color: #5cd3a8;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;
