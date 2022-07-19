import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';


export function Post() {

    const userName = 'Leonardo Martins';
    const profession = 'Desenvolvedor Front-end';

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/leodsmartins.png"/>
                    <div className={styles.authorInfo}>
                        <strong>{userName}</strong>
                        <span>{profession}</span>
                    </div>
                </div>
                <time title="15 de julho às 12:03" dateTime="2022-07-15 12:03:30">Publicado há 1 hora</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉<a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
            </div>
            <form className={styles.writePost}>
                <strong>Deixe seu feedback</strong>
                <textarea  
                    placeholder="Escreva um comentário..." 
                />
                <footer>
                    <button className={styles.buttonPost} type="submit">Publicar</button>
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