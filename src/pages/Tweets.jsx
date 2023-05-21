import { CardsList } from "../components/CardsList/CardList";
import { Container } from "../components/Container";
import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsers";
import { getTotal } from "../services/getTotal";
import {
  LoadMoreBtn,
  Filter,
  FilterMenu,
  FilterMenuItem,
  DropDown,
  BackBtn,
} from "../components/CardsList/CardList.styled";
import { IoCaretDown } from "react-icons/io5";

export const Tweets = () => {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(() => {
    const currentPage = JSON.parse(localStorage.getItem("page"))
      ? JSON.parse(localStorage.getItem("page"))
      : 2;
    return currentPage;
  });

  const [users, setUsers] = useState([]);
  const [savedUsers] = useState(JSON.parse(localStorage.getItem("users")));
  const [isOpen, setIsOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    getTotal().then((res) => setTotal(res));
    if (!savedUsers) {
      getUsers().then((res) => setUsers(res));
    } else {
      setUsers(savedUsers);
    }
  }, [savedUsers]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("page", JSON.stringify(page));
  }, [page]);

  const handleClick = async () => {
    getUsers(page).then((res) => {
      setUsers(users.concat(res));
    });
    setPage((prevstate) => (prevstate += 1));
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const filtredUsers = () => {
    if (filterValue === "all") return users;
    if (filterValue === "followed") {
      return users.filter((i) => i.isFollow);
    }
    if (filterValue === "unfollowed") {
      return users.filter((i) => !i.isFollow);
    }
  };
  const useLoadBtnShow = () => {
    return total !== users?.length && filterValue === "all";
  };

  return (
    <Container>
      <BackBtn to={"/"}>Go back</BackBtn>
      <DropDown isOpen={isOpen}>
        <Filter onClick={handleDropdownToggle}>
          Filter by: <IoCaretDown size={20} />
        </Filter>
        {isOpen && (
          <FilterMenu>
            <FilterMenuItem
              onClick={() => {
                setFilterValue("all");
                handleDropdownToggle();
              }}
            >
              show all
            </FilterMenuItem>
            <FilterMenuItem
              onClick={() => {
                setFilterValue("followed");
                handleDropdownToggle();
              }}
            >
              followings
            </FilterMenuItem>
            <FilterMenuItem
              onClick={() => {
                setFilterValue("unfollowed");
                handleDropdownToggle();
              }}
            >
              follow
            </FilterMenuItem>
          </FilterMenu>
        )}
      </DropDown>

      <CardsList users={filtredUsers()} setUsers={setUsers} />
      {useLoadBtnShow() && (
        <LoadMoreBtn onClick={handleClick}>Load more</LoadMoreBtn>
      )}
    </Container>
  );
};
