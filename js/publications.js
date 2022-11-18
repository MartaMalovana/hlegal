import publications from '../publications.json';

function getPublications (arr) {
    const reversedArr = [...arr].reverse();
    console.log(reversedArr);
};

getPublications(JSON.parse(publications));