import NavigateCard from "./navigation-card/navigate-card";

const PagesComponents = {
    load() {
        customElements.define("navigate-card", NavigateCard)
    }
}

export default PagesComponents;