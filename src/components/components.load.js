import Card from './card/card';

const Components = {
    load() {
        customElements.define("card-component", Card);
    }
}

export default Components