import "./styles.scss";
//helper dom
import $dom from './helpers/dom'

//chargement des composants
import components from './components/components.load';
components.laod();

const app = $dom.elm("#app");
app.insertAdjacentHTML("beforeend", `
    <card-component></card-component>
`)