// CSS
import './Header.css'

// Images
import EpicGamesLogo from '../assets/epic-games-logo.png'
import DownloadEmote from '../assets/download-image.png'
import EntranceEmote from '../assets/entrance-image.png'
import GowLogo from '../assets/gow-logo.png'
import PlusCircleEmote from '../assets/plus-circle.png'
import RightArrowEmote from '../assets/right-arrow.png'

const header = () => {
    return (
        <div className="header-container">
            
            {/* UPPER MENU */}
            <div className="container">
                <div className="epicGamesLogo">
                    <img src={EpicGamesLogo} alt="logo" />
                </div>

                <div class="buttons">
                    <div class="store-dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Store
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                    <div class="common-questions-dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Perguntas Frequentes
                        </button>

                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                    <div class="help-dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ajuda
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>

                    <div className="unrealEngine">
                        <button type="button">
                            <span>Unreal Engine</span>
                        </button>
                    </div>

                    <div class="support-dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Suporte
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE MENU (INICIAR SESSÃO, BAIXAR EPIC GAMES) */}
                <div className="right-container">

                    <div className="start-session-button">
                        <button class="btn btn-primary" type="button">
                            <img src={EntranceEmote} alt="download"></img>
                            <span>Iniciar Sessão</span>
                        </button>
                    </div>

                    <div className="download-epic-button">
                        <button class="btn btn-primary" type="button">
                            <img src={DownloadEmote} alt="download"></img>
                            <span>Baixar Epic Games</span>
                        </button>
                    </div>

                </div>
            </div>

            {/* HORIZONTAL LINE BETWEEN GOW CONTENT AND UPPER MENU*/}
            <hr></hr>

            {/* MAIN GAME CONTENT IN THE MIDDLE OF PAGE*/}
            <div className="gow-content">
                <img className="gow-logo-image" src={GowLogo} alt="god-of-war-logo"></img>
                <div className="gow-content-description">

                    <label>God of War é uma série de jogos eletrônicos de ação e aventura baseada nas mitologias grega e nórdica. Estreando em 2005, a série tornou-se um título emblemático para a marca PlayStation, e Kratos é um dos seus personagens mais populares.

                    </label>
                </div>
            </div>

            {/* BUY or GO TO WISH LIST*/}
            <div className="buy-wishlist-container">

                {/* PRE-SALE BUTTON*/}
                <div className="buy-pre-sale-button">
                    <button class="btn btn-primary" type="button">
                        <span>Compre na pré-venda</span>
                        <img src={RightArrowEmote} alt="right-arrow"></img>
                    </button>
                </div>

                {/* WISHLIST BUTTON*/}
                <div className="wishlist-button">
                    <button class="btn btn-primary" type="button">
                        <img src={PlusCircleEmote} alt="plus-circle"></img>
                        <span>Para a Lista de Desejos</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default header