import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../../hooks/useForm';

import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };
  const { handlerFieldChange, values, clearForm } = useForm(valoresIniciais);

  const formCategoriaHandler = (e) => {
    e.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  };

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://imersao-react-alura-nathipg.herokuapp.com/categorias';

    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        setCategorias([
          ...response,
        ]);
      });
    /*
      Também poderia ser feito assim:
      fetch(URL)
        .then(async (response) => {
          const responseJson = await response.json();
        });
    */
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form style={{ backgroundColor: values.cor }} onSubmit={(e) => formCategoriaHandler(e)}>

        <FormField
          label="Título"
          name="titulo"
          value={values.titulo}
          onChange={handlerFieldChange}
        />

        <FormField
          as="textarea"
          label="Descrição"
          name="descricao"
          value={values.descricao}
          onChange={handlerFieldChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={values.cor}
          onChange={handlerFieldChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((e) => <li key={e.titulo}>{e.titulo}</li>)}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
