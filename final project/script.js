const speciesData = {
    endangered: [
        { name: 'Amur Leopard', status: 'Critically Endangered' },
        { name: 'Hawksbill Turtle', status: 'Endangered' },
        { name: 'California Condor', status: 'Endangered' }
    ],
    endemic: [
        { name: 'Kakapo', status: 'Critically Endangered' },
        { name: 'Darwin’s Frog', status: 'Endangered' },
        { name: 'Giant Panda', status: 'Vulnerable' }
    ],
    extinct: [
        { name: 'Passenger Pigeon', status: 'Extinct' },
        { name: 'Woolly Mammoth', status: 'Extinct' },
        { name: 'Tasmanian Tiger', status: 'Extinct' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const type = document.currentScript.getAttribute('data-type');
    const speciesList = document.getElementById('species-list');

    if (speciesList) {
        speciesData[type].forEach(species => {
            const speciesDiv = document.createElement('div');
            speciesDiv.className = 'species';
            speciesDiv.innerHTML = `
                <h3>${species.name}</h3>
                <p>Status: ${species.status}</p>
            `;
            speciesList.appendChild(speciesDiv);
        });
    }
});