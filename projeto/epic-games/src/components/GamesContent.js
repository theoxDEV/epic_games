import { useState } from 'react'

// CSS
import styles from './GamesContent.module.css'

const GamesContent = ({ gamesCollection }) => {
    return (
        <div className={styles.container}>
            <div className={styles.listHeader}>
                <span>Jogos em promoção</span>

                <ul>
                    <li><a href="default.asp">Novos lançamentos</a></li>
                    <li><a href="news.asp">Mais vendidos</a></li>
                    <li><a href="contact.asp">Em breve</a></li>
                    <li><a href="contact.asp">Descubra mais ofertas</a></li>
                </ul>

            </div>

            <div className="styles listGamesContainer">

                {gamesCollection.map((game) =>

                    <div className={styles.eachGame}>
                        <img src={game.cover} alt={game.name}></img>
                        <br />
                        <span key={game.id}>{game.name}</span>
                        <span>R$ 3,99</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default GamesContent;