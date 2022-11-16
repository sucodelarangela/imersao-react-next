import styled from "styled-components";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { TrashIcon } from '@radix-ui/react-icons';

const StyledOverlay = styled(AlertDialog.Overlay)`
  background-color: ${({ theme }) => theme.backgroundBase};
  opacity: .5;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

const StyledAlertContent = styled(AlertDialog.Content)`
  background-color: ${({ theme }) => theme.backgroundLevel2};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  &:focus {
    outline: none;
  }
`;

const StyledTitle = styled(AlertDialog.Title)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColorBase};
  font-size: 17px;
  font-weight: 700;
`;

const StyledDescription = styled(AlertDialog.Description)`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColorBase};
  font-size: 15px;
  line-height: 1.5;
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 700;
  height: 35px;
  &.cancel {
    background-color: ${({ theme }) => theme.textColorBase};
    color: ${({ theme }) => theme.backgroundLevel1};
    &:hover, &:focus {
      box-shadow: ${({ theme }) => theme.backgroundLevel1} 0px 0px 0px 2px;
      opacity: 1;
    }
  }
  &.confirm {
    background-color: #ffe5e5;
    color: #cd2b31;
    &:hover, &:focus {
      box-shadow: rgb(243 174 175) 0px 0px 0px 2px;
      background-color: #fdd8d8;
      opacity: 1;
    }
  }
`;

export const DeleteButton = ({ handleDelete }) => {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button aria-label='Deletar vídeo'>
          <TrashIcon />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <StyledOverlay />
        <StyledAlertContent>
          <StyledTitle>Tem certeza que quer deletar este vídeo?</StyledTitle>
          <StyledDescription>Esta ação não pode ser revertida. O vídeo será permanentemente excluído do servidor.</StyledDescription>
          <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
            <AlertDialog.Cancel asChild>
              <Button className="cancel">Cancelar</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button onClick={handleDelete} className="confirm">Sim, deletar vídeo</Button>
            </AlertDialog.Action>
          </div>
        </StyledAlertContent>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
