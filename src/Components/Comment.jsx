import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";


export function Comment({ content, onDeleteComment }) {
    const userName="Leonardo Martins";
    const userTimePost="Cerca de 1 hora atrás"

    function handleDeleteComment() {
        onDeleteComment(content)
    }

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
                        <button onClick={handleDeleteComment} title="Excluir comentário">
                            <Trash size={24} />
                        </button>   
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={24} />
                        Curtir <span>20</span>
                    </button>
                </footer>
                
            </div>
        </div>
    )
}