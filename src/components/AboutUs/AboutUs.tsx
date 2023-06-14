import styles from "./styles.module.scss";

export function AboutUs ()  {
    return  (
        <section className={styles.section}>
            <h1 className={styles.title}>Sobre nós</h1>
            <p className={styles.paragraphs}>
                Somos uma confraria de amigos que visa proporcionar uma
                coletânea rica de bebidas ao dispor das pessoas, dando um vasto
                e variado catálogo de opções, com o objetivo de ampliar o paladar
                das pessoas no mundo da bebida, em meio a tantas opções de má
                qualidade que são vendidas e consumidas nos dias atuais.
            <br/>
            <br/>
                Através dessa loja, buscamos compartilhar um menu de bebidas
                selecionadas com muito afinco e zelo pela qualidade das mesmas,
                para que você possa conhecer as melhores opções para
                todos os gostos, e também para todos os bolsos!
            </p>
        </section>
    )
}