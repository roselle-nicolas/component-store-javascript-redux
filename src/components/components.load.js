import Card from './card/card';

const components = {
    laod() {
        customElements.define("card-component", Card);
    }
}

export default components