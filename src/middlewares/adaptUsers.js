export const adaptUsers = (users) => {
  users.map((user) => (user.isFollowed = false));
  return users;
};
