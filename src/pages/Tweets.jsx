import { CardsList } from "../components/CardsList/CardList";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsers";
import { getTotal } from "../services/getTotal";
import { LoadMoreBtn } from "../components/CardsList/CardList.styled";

export const Tweets = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(2);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getTotal().then((res) => setTotal(res));
    getUsers().then((res) => setUsers(res));
  }, []);

  // useEffect(() => {

  // }, []);

  const handleClick = async () => {
    getUsers(page).then((res) => {
      setUsers(users.concat(res));
    });
    setPage((prevstate) => (prevstate += 1));
  };

  return (
    <Container>
      <CardsList users={users} setUsers={setUsers} />
      {total !== users?.length && (
        <LoadMoreBtn onClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </Container>
  );
};
