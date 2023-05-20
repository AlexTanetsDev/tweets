import { useState } from "react";
import logo from "../../images/Vector.png";

import {
  UserCard,
  CardHeader,
  Logo,
  MainImage,
  AvatarBorder,
  Avatar,
  CardInfo,
  TweetsCount,
  FollowersCount,
  FollowBtn,
  Line,
} from "./Card.styled";

export const Card = ({ user, setUsers }) => {
  const handleClick = () => {};

  return (
    <UserCard>
      <CardHeader>
        <Logo src={logo} alt="logo" />
        <MainImage />
      </CardHeader>
      <CardInfo>
        <Line />
        <AvatarBorder>
          <Avatar avatar={user?.avatar}></Avatar>
        </AvatarBorder>

        <TweetsCount> {user?.tweets} tweets</TweetsCount>
        <FollowersCount>{user?.follovers} Followers</FollowersCount>
        <FollowBtn
          type="button"
          isFollow={user?.isFollow}
          onClick={handleClick}
        >
          {!user?.isFollow ? "Follow" : "Following"}
        </FollowBtn>
      </CardInfo>
    </UserCard>
  );
};
