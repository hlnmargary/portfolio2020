import './title.scss';

class Title {
    render() {
        const h1 = document.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = `Pationate about User experience / User interface Design & Creative development.`;
        body.appendChild(h1);
    }
}

export default Title;