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
import { updateUserFollowers } from "../../services/udateUserFollowers";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-hot-toast";

export const Card = ({ user, setUsers, users }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const folloversCounter = user.isFollow
      ? user.followers - 1
      : user.followers + 1;
    const status = await updateUserFollowers(user.id, {
      followers: folloversCounter,
    });
    if (status === 200) {
      const updatedUsers = users.map((item) => {
        if (item.id === user.id) {
          item.followers = folloversCounter;
          item.isFollow = !user.isFollow;
        }
        return item;
      });
      setUsers(updatedUsers);
      setIsLoading(false);
    } else {
      toast.error(" Oooops... something went wrong try again!");
    }
  };

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
        <FollowersCount>
          {user?.followers.toLocaleString("en")} Followers
        </FollowersCount>
        <FollowBtn
          type="button"
          isFollow={user?.isFollow}
          onClick={handleClick}
        >
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#471ca9"
            ariaLabel="three-dots-loading"
            visible={isLoading}
          />
          {!isLoading && (!user?.isFollow ? "Follow" : "Following")}
        </FollowBtn>
      </CardInfo>
    </UserCard>
  );
};
