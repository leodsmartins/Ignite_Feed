import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR  from 'date-fns/locale/pt-BR';
import { useState } from 'react';



export function Post({ author, publishedAt, content }) {

const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true});


const [comments, setComments] = useState([1,2]);

function handleCreateNewComment() {
    preventDefault();
    setComments([...comments, comments.length + 1]);

}
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>   
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraphy') {
                            return (
                                <p>{line.content}</p>
                            )
                    }
                    else if (line.type === 'link') {
                        return (
                            <p><a href='#'>{line.content}</a></p>
                        )
                    }
                })}
            
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.writePost}>
                <strong>Deixe seu feedback</strong>
                <textarea  
                    placeholder="Escreva um comentário..." 
                />
                <footer>
                    <button className={styles.buttonPost} type="submit">Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment />
                })}
            </div>
        </article>
    )
}