fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    filterCountriesByRegion(data);
    filterCountriesByPopulation(data);
    printDetailsForEach(data);
    calculateTotalPopulation(data);
    findCountryWithUSDCurrency(data);
  })
  .catch(error => console.error('Error fetching data:', error));

function filterCountriesByRegion(countries) {
  const asiaCountries = countries.filter(country => country.region === 'Asia');
  console.log("Countries in Asia:", asiaCountries);
}

function filterCountriesByPopulation(countries) {
  const countriesWithSmallPopulation = countries.filter(country => country.population < 200000);
  console.log("Countries with population less than 2 lakhs:", countriesWithSmallPopulation);
}

function printDetailsForEach(countries) {
  countries.forEach(country => {
    console.log(`Name: ${country.name.common}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Flag: ${country.flags.png}`);
    console.log("-------------------------");
  });
}

function calculateTotalPopulation(countries) {
  const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
  console.log("Total population of all countries:", totalPopulation);
}

function findCountryWithUSDCurrency(countries) {
  const countryWithUSD = countries.find(country => {
    return country.currencies && country.currencies.USD;
  });
  
  if (countryWithUSD) {
    console.log(`Country that uses US dollars as currency: ${countryWithUSD.name.common}`);
  } else {
    console.log("No country found that uses US dollars as currency.");
  }
}
