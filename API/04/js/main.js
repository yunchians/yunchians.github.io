function getData() {
    let xhrUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', xhrUrl);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let outputData = JSON.parse(this.responseText);
            console.log(outputData);
            showResult(outputData);
        } else if (this.status === 404) {
            console.log('404')

        }
    };
    xhr.send();

}

function showResult(jsonData) {
    let herolist = document.querySelector('ul.herolist');
    let heroes = jsonData.members;
    console.log(heroes);
    for (let i = 0; i < heroes.length; i++) {
        let item = document.createElement('li');
        let name = document.createElement('p');
        let identity = document.createElement('p');
        let age = document.createElement('p');
        let powerslist = document.createElement('p');
        name.textContent = `${heroes[i].name}`;
        identity.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
        age.textContent = `Age: ${heroes[i].age}`;
        powerslist.textContent = 'Superpowers:';

        name.classList.add('name');
        item.classList.add('item');

        herolist.appendChild(item);
        item.appendChild(name);
        item.appendChild(identity);
        item.appendChild(age);


        let superpowers = document.createElement('ul');
        let powers = heroes[i].powers;
        for (let y = 0; y < powers.length; y++) {
            let superpowersItem = document.createElement('li');
            superpowersItem.textContent = `${powers[y]}`;
            superpowers.appendChild(superpowersItem);

        }
        item.appendChild(powerslist);
        powerslist.appendChild(superpowers);
        superpowers.classList.add('sub-list')
    }
}

getData();