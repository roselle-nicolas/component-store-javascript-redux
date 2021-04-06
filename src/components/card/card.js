import "./card.scss";
import $dom from "../../helpers/dom";

class Card extends HTMLElement {

    // static get observedAttributes() { return ['titlecard']; }
    
    constructor() {
        super();
        this.titleCard;
        
    }

    connectedCallback () {
        if(this.getAttribute('titlecard')) {
            console.log("initialisation composant");
            this.titleCard = this.getAttribute('titlecard')
        }
        this.innerHTML =
        `
        <article>
            <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
            <footer>
                <h3 id="card-h3">${this.titleCard}</h3>
                <p>Description de la card</p>
            </footer>
        </article>
        `
    }

};

export default Card;