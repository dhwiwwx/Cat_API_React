import React, { useEffect, useState, Suspense, Fragment } from "react";
import { getCats, GetCatsResponse } from "../../api/getCats";
import { useQuery } from "react-query";
import Button from "../../components/Button";
import { Container, Item, List, Image, Title, Loding } from "./styled";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Cats() {
  const [cats, setCats] = useState<GetCatsResponse[]>([]);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [modalImgUrl, setModalImgUrl] = useState<string>("");

  const { data, isFetching, refetch } = useQuery(["cats"], getCats, {
    refetchOnWindowFocus: false,
  });

  const refresh = () => refetch();

  const handleOpenModal = (url: string) => {
    setModalImgUrl(url);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalImgUrl("");
    setIsOpen(false);
  };

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
          {cats.map(({ id, url }, index) => {
            if (index >= 9) return <Fragment key={id} />;
            const ItemClick = () => handleOpenModal(url);

            return (
              <Item key={id} onClick={ItemClick}>
                <Image src={url} alt={id} objectFit={"cover"} />
              </Item>
            );
          })}
        </List>
      )}
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            overflow: "hidden",
          },
        }}
      >
        <Image src={modalImgUrl} alt="modal-img" objectFit={"contain"} />
      </Modal>
      <Button onClick={refresh}>Reset</Button>
    </Container>
  );
}

export default Cats;
