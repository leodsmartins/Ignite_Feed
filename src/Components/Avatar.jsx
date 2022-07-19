import styles from  "./Avatar.module.css";

export function Avatar({hasBorder = false, src}) {
    return (
        <img 
            className={hasBorder ? styles.avatar : styles.avatarNoBorder} 
            src={src} />
    );
}