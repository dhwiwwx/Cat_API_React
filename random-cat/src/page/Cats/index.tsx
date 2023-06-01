import React, { useEffect, useState, Suspense } from "react";
import { getCats, GetCatsResponse } from "../../api/getCats";
import { useQuery } from "react-query";
import Button from "../../components/Button";
import { Container, Item, List, Image, Title, Loding } from "./styled";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Cats() {
  const [cats, setCats] = useState<GetCatsResponse[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, isFetching, refetch } = useQuery(["cats"], getCats);

  const refresh = () => refetch();

  const handleCloseModal = () => setIsOpen(false);

  useEffect(() => {
    if (!data) return;
    setCats(data);
  }, [data]);
  return (
    <Container>
      <Title>CAT</Title>
      {isFetching && <Loding>로딩중...</Loding>}
      {!isFetching && data && (
        <List>
          {cats.map(({ id, url }) => {
            const handleOpenModal = () => setIsOpen(true);

            return (
              <Item key={id} onClick={handleOpenModal}>
                <Image src={url} alt={id} />
              </Item>
            );
          })}
        </List>
      )}
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
      ></Modal>
      <Button onClick={refresh}>Reset</Button>
    </Container>
  );
}

export default Cats;
