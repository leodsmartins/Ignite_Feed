import styles from './Sidebar.module.css';
import { PencilSimpleLine }  from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    const userName = 'Leonardo Martins';
    const profession = 'Desenvolvedor Front-end';
    const textButton = 'Edite o seu perfil';
    
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/leodsmartins.png"/>
                <strong className={styles.userName}>
                    {userName}
                </strong>
                <span className={styles.profession}>
                    {profession}
                </span>
            </div>
            <footer>
                
                <a className={styles.profileButton}href="#">
                    <PencilSimpleLine size={20} />
                    {textButton}
                </a>
            </footer>
        </aside>
    )
}