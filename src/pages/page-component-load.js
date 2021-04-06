import NavigateCard from "./navigation-card/navigation-card";

const PagesComponents = {
    load() {
        customElements.define("navigate-card", NavigateCard)
    }
}

export default PagesComponents;