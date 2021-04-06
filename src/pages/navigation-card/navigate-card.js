import ListCard from "./list-card";
import "./navigate-card.scss";

class NavigateCard extends HTMLElement {

    connectedCallback() {
        this.innerHTML = 
        `
            <section id="section-navigation-card">
                <ul>
                    ${ListCard.map((card) => 
                        `
                        <li><card-component titlecard="${card.title}"></card-component></li>
                        `
                    ).join('')}
                </ul>
              
            </section>
        `
    }
}

export default NavigateCard;