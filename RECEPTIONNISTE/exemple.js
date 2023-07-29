// Sélectionnez tous les éléments nécessaires
const reservationsList = document.querySelector('.reservations ul');
const clientDetails = document.querySelector('.client-details');
const newClientForm = document.querySelector('.new-client form');
const nomInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const telephoneInput = document.getElementById('telephone');

// Ajoutez un gestionnaire d'événements pour les réservations
reservationsList.addEventListener('click', function(event) {
  // Vérifiez si l'élément cliqué est un <li>
  if (event.target.tagName === 'LI') {
    // Mettez à jour les détails du client avec les informations du <li> cliqué
    clientDetails.innerHTML = event.target.innerHTML;
  }
});

// Ajoutez un gestionnaire d'événements pour le formulaire d'ajout de nouveau client
newClientForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Créez un nouvel élément <li> avec les informations du nouveau client
  const newClientLi = document.createElement('li');
  newClientLi.textContent = `Nom: ${nomInput.value}, Email: ${emailInput.value}, Téléphone: ${telephoneInput.value}`;
  
  // Ajoutez le nouvel élément <li> à la liste des réservations
  reservationsList.appendChild(newClientLi);
  
  // Réinitialisez le formulaire
  newClientForm.reset();
});
