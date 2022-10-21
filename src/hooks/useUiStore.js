import { useDispatch, useSelector } from "react-redux"
import { onClosedDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {

  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector( state => state.ui )

  const openDateModal = () => {
    dispatch(onOpenDateModal())
  }

  const closeDateModal = () => {
    dispatch(onClosedDateModal())
  }

  return {
    //propiedades
    isDateModalOpen,

    //metodos
    openDateModal,
    closeDateModal,

  }

}