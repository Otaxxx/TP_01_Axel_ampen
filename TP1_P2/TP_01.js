document.querySelector('#wiki').href = 'https://fr.wikipedia.org/wiki/Wikipédia:Accueil_principal';


document.querySelector('#btn').addEventListener('click', function() {
    let texte = document.querySelector('#txt').value;
    if (texte === 'Oui' || texte === 'Non') {
        alert('Merci');
    } else {
         alert('Il faut mettre Oui ou Non');
    }
});


nextSiblingElement = document.querySelector('#option1').nextElementSibling;
nextSiblingElement.textContent = 'HP';

nextSiblingElement = document.querySelector('#option2').nextElementSibling;
nextSiblingElement.textContent = 'Casque';

nextSiblingElement = document.querySelector('#option3').nextElementSibling;
nextSiblingElement.textContent = 'Bluetooth';

document.addEventListener('DOMContentLoaded', function() {
    const volumeLabel = document.querySelector('#volume-label');
    const radios = document.querySelectorAll('input[name="options"]');
    
    radios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value == "1") {
                volumeLabel.textContent = "Volume HP";
            } else if (this.value == "2") {
                volumeLabel.textContent = "Volume Casque";
            } else if (this.value == "3") {
                volumeLabel.textContent = "Volume Bluetooth";
            }
        });
    });
});
