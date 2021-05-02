import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Modal,
  Button,
  useDisclosure,
  ModalFooter,
  Text
} from "@chakra-ui/react";
import React from "react";
import { modalType } from "../../utils";
import { useDispatch } from "react-redux";

export default function M({ type, payload, children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  console.log(modalType[type]);
  const Handle = () => {
    dispatch({
      type: modalType[type].action,
      payload
    });
    onClose();
  };

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        <Text>{modalType[type].icon}</Text>
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalType[type].title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{children}</ModalBody>

          <ModalFooter>
            <Button
              colorScheme={modalType[type].colorScheme}
              onClick={Handle}
              mr={3}
            >
              {modalType[type].text}
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
