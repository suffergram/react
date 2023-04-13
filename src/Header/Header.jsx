import "./style.css";
import Button from "../Button/Button";

export default function Header({ newModal }) {
    return (
        <header>
            <div className="header-content">
                <p className="logo"><strong>netflix</strong>roulette</p>
                <Button onButtonClick={newModal} className="add" text="+ add movie" />
                <div>
                    <h1>FIND YOUR MOVIE</h1>
                    <div className="search-line">
                        <input placeholder="What do you want to watch?"></input>
                        <Button className="confirm" text="search" />
                    </div>
                </div>
            </div>
            <div className="header-background"><div></div></div>
        </header>
    );
}