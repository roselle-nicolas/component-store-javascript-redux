import "./styles.scss";
//helper dom
import $dom from './helpers/dom'

//chargement des composants
import Components from './components/components.load';
import PagesComponents from "./pages/page-component-load";
Components.load();
PagesComponents.load();

$dom.innerHTMLElm("#app", "<navigate-card></navigate-card>")
