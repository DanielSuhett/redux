import { BsPencil, BsPlusCircleFill, BsTrash } from "react-icons/bs";
import { RiBarcodeFill } from "react-icons/ri";

export const modalType = {
  deleting: {
    title: "Deletar Produto",
    text: "deletar",
    icon: <BsTrash fontSize="20" />,
    colorScheme: "red",
    action: "product/DELETE_PRODUCT"
  },
  edit: {
    title: "Editar Produto",
    text: "editar",
    icon: <BsPencil fontSize="20" />,
    colorScheme: "teal",
    action: "product/PUT_PRODUCT"
  },
  create: {
    title: "Criar Produto",
    text: "criar",
    icon: <BsPlusCircleFill fontSize="20" />,
    colorScheme: "teal",
    action: "product/POST_PRODUCT"
  },
  barcode: {
    title: "Código de barras",
    text: "ok",
    icon: <RiBarcodeFill fontSize="20" />,
    colorScheme: "teal",
    action: "null"
  }
};
