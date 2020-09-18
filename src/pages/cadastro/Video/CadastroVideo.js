import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

import PageDefault from '../../../components/PageDefault/PageDefault';
import useForm from '../../../hooks/useForm';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoriasTitulos = categorias.map((categoria) => categoria.titulo);
  const { handlerFieldChange, values } = useForm({
    titulo: 'Vídeo Padrão',
    url: 'https://www.youtube.com/watch?v=5MzOCxSWrrc',
    categoria: 'Front End',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categoriaEscolhida = categorias.find((c) => c.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          history.push('/');
        });
      }}
      >
        <FormField
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={handlerFieldChange}
        />

        <FormField
          label="Url"
          name="url"
          value={values.url}
          onChange={handlerFieldChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handlerFieldChange}
          suggestions={
            categoriasTitulos
          }
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
