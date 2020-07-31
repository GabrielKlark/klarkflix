import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css'
//import ButtonLink from './components/ButtonLink';
import Button from '../Button/index.js';

export default function Menu () {
    return (
        <nav className="Menu">
            <Link to='/'>
            <img className="Logo" src={Logo} alt="Klarkflix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}
