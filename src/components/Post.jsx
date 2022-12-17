import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="http://github.com/gabriellebcastro.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Gabrielle Castro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:38">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Oi pessoal!</p>
                <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite para aprender mais sobre React em aplicações Web.</p>
                <p>Link para o projeto: <a href="">github.com/gabrielle-ignite</a></p>
                <p>
                    <a href="">#novoprojeto</a> {'  '}
                    <a href="">#rocketseat</a> {'  '}
                    <a href="">#react</a>
                </p>
            </div>
        </article>
    )
}