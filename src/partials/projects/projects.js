import './projects.scss';
import datas from '../../assets/datas/data.json';

const image = document.querySelectorAll('.project_visual-image');
const text = document.querySelectorAll('.project_presentation-text');
const title = document.querySelectorAll('.project_presentation-title');
const subtitle = document.querySelectorAll('.project_presentation-subtitle');
const id = document.querySelectorAll('.project_card-number');

const projects = [];

const params = new URLSearchParams(document.location.search.substring(1));
const dev = params.get('dev');
console.log(dev);

const createObj = () => {
    image.forEach((el, i) => {
        const myObj = new Object();
        myObj.image = image[i];
        myObj.text = text[i];
        myObj.title = title[i];
        myObj.subtitle = subtitle[i];
        myObj.id = id[i];
        projects.push(myObj);
    })
};

createObj();

const populateData = (id) => {
    projects[id].image.style.backgroundImage = `url(assets/${datas[id].image})`;
    projects[id].text.textContent = datas[id].description;
    projects[id].title.textContent = datas[id].name;
    projects[id].subtitle.textContent = datas[id].subtitle;
    projects[id].id.textContent = datas[id].number;
};

datas.forEach((el, i) => {
    populateData(i);
});


