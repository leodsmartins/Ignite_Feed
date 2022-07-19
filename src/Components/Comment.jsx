import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";


export function Comment() {
    const userName="Leonardo Martins";
    const userTimePost="Cerca de 1 hora atrás"
    const userPost="Muito bom Devon, parabéns!! 👏👏"


    return (
        <div className={styles.comment}>
            <Avatar src="http://github.com/leodsmartins.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{userName}</strong>
                            <time className={styles.time} title="15 de julho às 12:03" dateTime="2022-07-15 12:03:30">{userTimePost}</time>
                        </div>
                        <button title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{userPost}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}