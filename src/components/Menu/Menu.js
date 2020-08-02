import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo.png';

import Button from '../Button';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Natflix" />
      </Link>

      <Button as={Link} to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
