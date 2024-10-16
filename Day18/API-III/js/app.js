// Fetch cryptocurrency prices from CoinGecko API
document.getElementById('cryptoButton').addEventListener('click', () => {
    fetchCryptoPrices();
});

function fetchCryptoPrices() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            const bitcoinPrice = data.bitcoin.usd;
            const ethereumPrice = data.ethereum.usd;
            document.getElementById('cryptoResult').innerHTML = `
                <p><strong>Bitcoin (BTC):</strong> $${bitcoinPrice}</p>
                <p><strong>Ethereum (ETH):</strong> $${ethereumPrice}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching crypto prices:', error);
        });
}

// Fetch exchange rates from Exchangerate API
document.getElementById('currencyButton').addEventListener('click', () => {
    fetchCurrencyRates();
});

function fetchCurrencyRates() {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
            const euroRate = data.rates.EUR;
            const gbpRate = data.rates.GBP;
            document.getElementById('currencyResult').innerHTML = `
                <p><strong>USD to EUR:</strong> ${euroRate}</p>
                <p><strong>USD to GBP:</strong> ${gbpRate}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching currency rates:', error);
        });
}

// Fetch metal prices from Metalprice API
document.getElementById('metalButton').addEventListener('click', () => {
    fetchMetalPrices();
});

function fetchMetalPrices() {
    fetch('https://api.metalpriceapi.com/v1/latest?api_key=YOUR_API_KEY&base=USD&symbols=XAU,XAG')
        .then(response => response.json())
        .then(data => {
            const goldPrice = data.rates.XAU;
            const silverPrice = data.rates.XAG;
            document.getElementById('metalResult').innerHTML = `
                <p><strong>Gold (XAU):</strong> $${goldPrice} per ounce</p>
                <p><strong>Silver (XAG):</strong> $${silverPrice} per ounce</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching metal prices:', error);
        });
}