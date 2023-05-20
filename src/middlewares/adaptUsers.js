export const adaptUsers = (users) => {
  // console.log(users);
  users.map((user) => (user.isFollowed = false));
  return users;
};
