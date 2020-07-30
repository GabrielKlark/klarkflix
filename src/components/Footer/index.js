import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Website proudly created by an 
          {' '}
          <a href="https://www.alura.com.br/">
            Alura's #ImersãoReact
          </a>
          {' '}
        student!
      </p>
    </FooterBase>
  );
}

export default Footer;
