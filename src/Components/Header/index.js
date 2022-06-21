import { useState } from 'react';
import styles from './styles.module.scss';

import { FiX } from 'react-icons/fi';
import { BiMenuAltRight } from 'react-icons/bi';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header>
            <nav className={showMenu ? styles.menuOn : styles.nav}>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#sobremim">Sobre mim</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <span onClick={() => setShowMenu(!showMenu)}>
                {showMenu ? <FiX size={40} color="var(--soft-purple)" />
                    :
                    <BiMenuAltRight size={40} color="var(--soft-purple)" />
                }
            </span>
        </header>
    )
}