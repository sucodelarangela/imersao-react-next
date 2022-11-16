import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';

export const StyledTrigger = styled(Select.Trigger)`
/* reset */
  button {
    all: unset;
  }
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  border: 1px solid ${({ theme }) => theme.borderBase};
  color: ${({ theme }) => theme.textColorBase};
  box-shadow: 0 2px 10px var(--blackA7);
  &:hover,
  &:focus {
    opacity: .5;
  }
  &[data-placeholder] {
  color: ${({ theme }) => theme.textColorBase};
}
`;

export const StyledContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundLevel2};
  border-radius: 4px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const StyledViewport = styled(Select.Viewport)`
  padding: 5px;
`;

export const StyledItem = styled(Select.Item)`
  font-size: 13px;
  line-height: 1;
  color: ${({ theme }) => theme.textColorBase};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
  &[data-disabled] {
    color: ${({ theme }) => theme.textColorBase};
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.textColorBase};
    color: ${({ theme }) => theme.backgroundLevel2};
}
`;
