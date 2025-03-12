import * as S from "./styles";

type Props = {
  open: boolean;
  handleClose: () => void;
};

export const Modal = ({ open, handleClose }: Props) => {
  if (!open) return null;

  return (
    <>
      <S.ModaOverlay onClick={handleClose}>
        <S.ModalInner>Hello</S.ModalInner>
      </S.ModaOverlay>
    </>
  );
};
