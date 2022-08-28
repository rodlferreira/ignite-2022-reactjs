import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/58087865?v=4" alt="rodlferreira" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rodriggo Ferreira</strong>
                            <time title='08 de Agosto de 2022 ' dateTime='2022-08-08'>CErca de 1h</time>
                        </div>
                        <button title="trash">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Topizeira</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}