import React, { useEffect, useState } from 'react';
/* import dadosIniciais from '../../data/dados_iniciais.json'; */
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [setDadosIniciais]);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={dadosIniciais[0].videos[0].description}
          />
          {dadosIniciais.map((e) => (
            <Carousel
              key={e.id}
              ignoreFirstVideo
              category={e}
            />
          ))}
        </>
      )}

    </PageDefault>
  );
}

export default Home;
