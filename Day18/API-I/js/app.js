// Fetch random dog image from Dog API
document.getElementById('dogButton').addEventListener('click', () => {
    fetchDogImage();
});

function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').innerHTML = `<img src="${data.message}" alt="Random Dog"/>`;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

// Fetch random cat fact from Cat Facts API
document.getElementById('catButton').addEventListener('click', () => {
    fetchCatFact();
});

function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('catFact').textContent = data.fact;
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
        });
}

// Fetch random fox image from RandomFox API
document.getElementById('foxButton').addEventListener('click', () => {
    fetchFoxImage();
});

function fetchFoxImage() {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('foxImage').innerHTML = `<img src="${data.image}" alt="Random Fox"/>`;
        })
        .catch(error => {
            console.error('Error fetching fox image:', error);
        });
}