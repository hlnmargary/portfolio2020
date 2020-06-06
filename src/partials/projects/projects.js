import './projects.scss';
import datas from '../../assets/datas/data.json';

const getDataAccordingToParams = (param) => datas.filter(el => el[param] == true);

/*
* Get params from URL
*/
const params = new URLSearchParams(document.location.search.substring(1));
let dataFiltered = null;
for (const key of params.keys()) {
    switch (key) {
        case 'dev':
            dataFiltered = getDataAccordingToParams(key);
            break;
        case 'design':
            dataFiltered = getDataAccordingToParams(key);
            break;
        default:
            console.log(`Sorry, the case is not handled`);
    }
}

const projects = document.querySelector('.project');
const wrapper = document.querySelector('.wrapper');
projects.setAttribute('id', 'project-1');
for (let i = 0; i < dataFiltered.length - 1; i++) {
    const clone = projects.cloneNode(true);
    clone.setAttribute('id', `project-${i + 2}`);
    wrapper.appendChild(clone);
}

const image = document.querySelectorAll('.project_visual-image');
const text = document.querySelectorAll('.project_presentation-text');
const title = document.querySelectorAll('.project_presentation-title');
const subtitle = document.querySelectorAll('.project_presentation-subtitle');
const id = document.querySelectorAll('.project_card-number');

const templateToFill = [];


const createObj = () => {
    image.forEach((el, i) => {
        const myObj = new Object();
        myObj.image = image[i];
        myObj.text = text[i];
        myObj.title = title[i];
        myObj.subtitle = subtitle[i];
        myObj.id = id[i];
        templateToFill.push(myObj);
    })
};

createObj();

const populateData = (id) => {
    templateToFill[id].image.style.backgroundImage = `url(assets/${datas[id].image})`;
    templateToFill[id].text.textContent = dataFiltered[id].description;
    templateToFill[id].title.textContent = dataFiltered[id].name;
    templateToFill[id].subtitle.textContent = dataFiltered[id].subtitle;
    templateToFill[id].id.textContent = dataFiltered[id].number;
};

dataFiltered.forEach((el, i) => {
    populateData(i);
});


