import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([{
    nome: 'Melhores do Bu',
    descricao: 'O nome diz tudo',
    cor: '#D31212',
  }]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [categoria, setCategoria] = useState(valoresIniciais);

  const formCategoriaHandler = (e) => {
    e.preventDefault();
    setCategorias([...categorias, categoria]);
    setCategoria({ ...categoria, ...valoresIniciais });
  };

  const setPropCategoria = (prop, value) => {
    setCategoria({ ...categoria, [prop]: value });
  };

  const handlerFieldChange = (e) => {
    const { name, value } = e.target;
    setPropCategoria(
      name,
      value,
    );
  };

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoria.nome}
      </h1>

      <form style={{ backgroundColor: categoria.cor }} onSubmit={(e) => formCategoriaHandler(e)}>

        <FormField
          label="Nome"
          name="nome"
          value={categoria.nome}
          onChange={handlerFieldChange}
        />

        <FormField
          as="textarea"
          label="Descrição"
          name="descricao"
          value={categoria.descricao}
          onChange={handlerFieldChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={categoria.cor}
          onChange={handlerFieldChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((e, i) => <li key={e.nome + i}>{e.nome}</li>)}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
