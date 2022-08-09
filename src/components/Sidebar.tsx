import styles from './Sidebar.module.css';
import me from '../assets/me.jpg';
import { FilePdf } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={me} alt="Rodriggo Ferreira" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/58087865?v=4" alt="rodlferreira" />
                <strong>Rodriggo Ferreira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <FilePdf size={20}/>
                    Visualizar o CV
                </a>
            </footer>
        </aside>
    )
}