import React from 'react';
import { FooterBase } from './style';
import Logo from '../../assets/img/logo.png';
import { MyLogo } from './style';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <MyLogo src={Logo} alt="Logo Klarkflix" />
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
