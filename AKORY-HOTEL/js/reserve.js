// Sélectionnez le formulaire de réservation
const reservationForm = document.getElementById('reservationForm');

// Ajoutez un gestionnaire d'événements au clic sur le bouton "Réserver"
reservationForm.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire (ne pas soumettre la page)
    event.preventDefault();
    
    // Rediriger vers la page "infoclient.html" après avoir cliqué sur le bouton "Réserver"
    window.location.href = 'infoclient.html';
});
