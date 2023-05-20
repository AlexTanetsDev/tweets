import { Card } from "../Card/Card";
import { List, Item } from "./CardList.styled";

export const CardsList = ({ users, setUsers }) => {
  return (
    <List>
      {users?.map((user) => (
        <Item key={user?.id}>
          <Card user={user} setUsers={setUsers} />
        </Item>
      ))}
    </List>
  );
};
