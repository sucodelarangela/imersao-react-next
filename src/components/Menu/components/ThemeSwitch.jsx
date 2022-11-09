import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

export const StyledSwitch = styled(Switch.Root)`
  min-width: 50px;
  height: 26px;
  background-color: #333333;
  border-radius: 26px;
  border: none;
  position: relative;
  &::after {
    content: '☀️';
    position: absolute;
    top: 3px;
    right: 4px;
  }
  &::before {
    content: '🌙';
    position: absolute;
    top: 3px;
    left: 4px;
  }
  &[data-state="checked"] {
      &::after {
        display: none;
      }
    }
`;

export const StyledThumb = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: #fff;
  clip-path: circle();
  transition: transform 100ms;
  transform: translateX(2px);
  &[data-state="checked"] {
    transform: translateX(26px);
  }
`;