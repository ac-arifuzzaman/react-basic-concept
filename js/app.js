const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = countires => {
    console.log(countires[0]);
    const container = document.getElementById('countries');
    const countryHTML = countires.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(' ');
    console.log(countryHTML[0]);
}
const getCountryHTML = country => {
    const { name, capital, flag } = country;
    return `
    <div class="country">
        <h2>${name}</h2>
        <h4>${capital}</h4>
        <img src="${flag}">
    </div>
    `
}
loadCountries();