import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';

function CadastroCategoria() {
    const [ categorias, setCategorias ] = useState([{
        'nome': 'Melhores do Bu',
        'descricao': 'O nome diz tudo',
        'cor': '#D31212'
    }]);
    const valoresIniciais = {
        'nome': '',
        'descricao': '',
        'cor': '#000'
    };
    const [ categoria, setCategoria ] = useState(valoresIniciais);

    const formCategoriaHandler = (e) => {
        e.preventDefault();
        setCategorias([...categorias, categoria]);
        setCategoria({...categoria, ...valoresIniciais});
    };

    const setPropCategoria = (prop, value) => {
        setCategoria({...categoria, [prop]: value})
    };

    const handlerFieldChange = (e) => {
        const { name, value } = e.target;
        
        setPropCategoria(
            name,
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {categoria.nome}</h1>

            <form style={{backgroundColor: categoria.cor}} onSubmit={e => formCategoriaHandler(e)}>

                <FormField
                    label="Nome"
                    name="nome"
                    type="text"
                    value={categoria.nome}
                    onChange={handlerFieldChange} />

                <FormField
                    tag="textarea"
                    label="Descrição"
                    name="descricao"
                    type="text"
                    value={categoria.descricao}
                    onChange={handlerFieldChange} />

                <FormField
                    label="Cor"
                    name="cor"
                    type="color"
                    value={categoria.cor}
                    onChange={handlerFieldChange} />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, i) => <li key={categoria.nome + i}>{categoria.nome}</li>)}
            </ul>

            <Link to="/">
                Ir para home
            </Link> 
        </PageDefault>
    );
}

export default CadastroCategoria;