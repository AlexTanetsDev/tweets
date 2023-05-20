import styled from "styled-components";
import bgImg from "../../images/bgImg.png";

export const UserCard = styled.article`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const CardHeader = styled.div`
  position: relative;
  padding: 28px 36px 18px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;

  width: 76px;
  height: 22px;
`;

export const MainImage = styled.div`
  width: 308px;
  height: 168px;
  background-image: url("${bgImg}");
  background-size: 300px 160px;
  background-repeat: no-repeat;
`;

export const CardInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarBorder = styled.div`
  position: absolute;
  top: -35px;
  left: 148px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.span`
  /* position: absolute;
  top: -35px;
  left: 153px; */
  display: block;
  width: 62px;
  height: 62px;
  z-index: 123;
  border-radius: 50%;
  background-image: url(${(p) => p.avatar});
`;
export const TweetsCount = styled.p`
  margin-top: 62px;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const FollowersCount = styled(TweetsCount)`
  margin-top: 16px;
`;

export const FollowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  width: 196px;
  height: 50px;
  margin-bottom: 36px;
  margin-top: 26px;

  background-color: ${(p) => (!p.isFollow ? "#ebd8ff" : "#5CD3A8")};
  border-radius: 10.3108px;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
