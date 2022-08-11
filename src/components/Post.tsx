import styles from './Post.module.css';
import meWithHelmet from '../assets/meWithHelmet.jpg';

export function Post(_props: {author: string, content: string}) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={meWithHelmet} alt="me With Helmet" />
                    <div className={styles.authorInfo}>
                        <strong>Rodriggo Ferreira</strong>
                        <span>web developer</span>
                    </div>
                </div>

                <time title='08 de Agosto de 2022 ' dateTime='2022-08-08'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="#"> jane.design/doctorcare</a></p>
                <p>
                    <a href="#"> #novoprojeto</a>
                    <a href="#"> #nlw</a>
                    <a href="#"> #rocketseat</a>
                </p>
            </div>
        </article>
    )
}