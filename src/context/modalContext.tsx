import { createContext, ReactNode, useContext, useState } from 'react';

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  modalIsOpen: boolean;
  payload: ComicProps;
  openModal(payload: ComicProps): void;
  closeModal(): void;
};

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [payload, setPayload] = useState({} as ComicProps);

  const openModal = (payload: ComicProps) => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
    setPayload({ ...payload });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <ModalContext.Provider
      value={{ closeModal, modalIsOpen, payload, openModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
