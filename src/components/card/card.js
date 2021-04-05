import "./card.scss";

class Card extends HTMLElement {
    constructor() {
        super();
        this.innerHTML =
        `
        <article>
            <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <footer>
                <h3>Card title</h3>
                <p>Description de la card</p>
            </footer>
        </article>
        `
    }
};

export default Card;