import styles from './Sidebar.module.css';
import me from '../assets/me.jpg';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={me} alt="Rodriggo Ferreira" />
            <div className={styles.profile}>
                <strong>Rodriggo Ferreira</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Visualizar o CV
                </a>
            </footer>
        </aside>
    )
}