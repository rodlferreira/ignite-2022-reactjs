import styles from './Post.module.css';
import meWithHelmet from '../assets/meWithHelmet.jpg';
import { Comment } from './Comment';

export function Post(_props: { author?: string, content: { type: string; content: string; }[], publish?: Date }) {
    console.log('cheguei aqui => ', _props)//lembrar de retirar os comentários desnecessários
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

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}