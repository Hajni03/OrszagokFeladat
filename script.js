fetch('https://api.sampleapis.com/countries/countries')
    .then(response => response.json())
    .then(data => {
        const countries = {};
        data.forEach((country, index) => {
            countries[`country_${country.id}`] = country;
        });
        console.log(countries);
        loadCards(countries);
    })
    .catch(error => console.log('Hiba: ', error));

function loadCards(countries){
    const cardContainer = document.getElementById('card-container');

    if(!countries || Object.keys(countries).length === 0){
        console.error('Hiba: Nincsenek országok');
        return;
    }

    for(const key in countries){
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h2>${countries[key].name}</h2>
        <img src="${countries[key].media.flag}" alt="${countries[key].name}_zaszlo">
        <p><strong>Főváros:</strong>${countries[key].capital}</p>
        <p><strong>Pénznem:</strong>${countries[key].currency}</p>
        <p><strong>Rövidítés</strong> ${countries[key].abbrevation}</p>
        `;

        cardContainer.appendChild(card);
    }
}