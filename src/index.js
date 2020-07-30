import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home/Home';
import CadastroVideo from './pages/cadastro/Video/CadastroVideo';
import CadastroCategoria from './pages/cadastro/Categoria/CadastroCategoria';

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route component={() => (<React.Fragment>Página 404</React.Fragment>)} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);
