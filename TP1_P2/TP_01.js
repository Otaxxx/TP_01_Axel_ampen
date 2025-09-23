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
const slider = document.querySelector('.slider input[type="range"]');
const volumeLabel = document.querySelector('#volume-label');
const typeLabel = document.querySelector('#volume-type');
const radios = document.querySelectorAll('input[name="options"]');

function update() {
    volumeLabel.textContent = slider.value;
    let type = "";
    radios.forEach(r => {
        if (r.checked) {
            if (r.value === "1") type = "HP";
            else if (r.value === "2") type = "Casque";
            else if (r.value === "3") type = "Bluetooth";
        }
    });
    typeLabel.textContent = type;
}
slider.addEventListener('input', update);
radios.forEach(r => r.addEventListener('change', update));
update();



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#cocher").textContent = "Mute";
    const checkbox = document.querySelector('#caseee');
    const slider = document.querySelector('.slider input[type="range"]');
    checkbox.addEventListener('change', function() {
        slider.disabled = checkbox.checked; 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const newImage = document.createElement('img');
    newImage.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
    newImage.width = 200;
    const googleLogo = document.querySelector('#Image');
    googleLogo.insertAdjacentElement('afterend', newImage);
});






