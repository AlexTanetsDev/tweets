import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
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
  margin-top: 15px;

  background-color: #ebd8ff;
  border-radius: 10.3108px;
  border: none;
  outline: none;
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

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(p) => (p.isOpen ? 10 : 84)}px;
  width: 200px;
`;

export const Filter = styled.div`
  display: flex;
  gap: 25px;
  width: 200px;
  padding: 8px 28px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #ebd8ff;
  border-radius: 10.3108px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06);
  :hover {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const FilterMenu = styled.ul`
  width: 170px;
  background-color: #ebd8ff;
  border-bottom-left-radius: 10.3108px;
  border-bottom-right-radius: 10.3108px;
`;

export const FilterMenuItem = styled.li`
  font-size: 12px;
  padding: 5px;
  text-align: center;
  border-top: 1px solid #fbf8ff;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;

export const BackBtn = styled(NavLink)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 120px;
  height: 40px;
  border-radius: 10.3108px;
  background-color: #5cd3a8;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: #f1f1f1;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;
