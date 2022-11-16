import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaLink } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

const StyledFooter = styled.footer`
  padding-top: 4px;
  width: 100%;
  & ul {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto;
    width: fit-content;
    gap: 32px;
    & li {
      display: inline-block;
      & svg {
        fill: ${({ theme }) => theme.textColorBase};
      }
    }
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href="https://github.com/sucodelarangela" target="_blank" aria-label='Github'>
            <FaGithub size={26} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/angela-caldas/" target="_blank" aria-label='LinkedIn'>
            <FaLinkedinIn size={26} />
          </a>
        </li>
        <li>
          <a href="https://sucodelarangela.medium.com" target="_blank" aria-label='Medium'>
            <BsMedium size={26} />
          </a>
        </li>
        <li>
          <a href="https://cursos.alura.com.br/vitrinedev/sucodelarangela" target="_blank" aria-label='Portfolio'>
            <FaLink size={24} />
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};
