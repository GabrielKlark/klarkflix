import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

const AppWrapper = styled.div`
    background-color: var(--grayDark);
`;

function Home() {
  
  return (
    <AppWrapper>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"It is amazing, I love to dance it! "}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />

    </AppWrapper>
  );
}

export default Home;
