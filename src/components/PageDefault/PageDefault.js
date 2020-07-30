import React from 'react';

import Footer from '../Footer';
import Menu from '../Menu/Menu';

import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return (
        <React.Fragment>
            <Menu />

            <Main>
                {children}
            </Main>
            
            <Footer />
        </React.Fragment>
    );
}

export default PageDefault;