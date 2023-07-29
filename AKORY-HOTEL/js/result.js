 // Sélectionnez le bouton "Let's go !"
 const letsGoButton = document.querySelector('.lets');

 // Sélectionnez les résultats de recherche
 const searchResults = document.querySelector('.search-results');

 // Ajoutez un gestionnaire d'événements au clic sur le bouton "Let's go !"
 letsGoButton.addEventListener('click', function() {
     // Faites glisser les résultats de recherche dans la vue en utilisant transform: translateX(0)
     searchResults.style.transform = 'translateX(-10%)';
 });


// Sélectionnez le bouton "Fermer"
const closeButton = document.querySelector('.close-btn');

// Ajoutez un gestionnaire d'événements au clic sur le bouton "Fermer"
closeButton.addEventListener('click', function() {
    // Faites glisser les résultats de recherche hors de la vue en utilisant transform: translateX(100%)
    searchResults.style.transform = 'translateX(100%)';
});

 // Fonction pour afficher les résultats de recherche
function showResults() {
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.style.display = 'block';

    // Vous pouvez ajouter ici le code pour récupérer les résultats de recherche et les ajouter dans la liste <ul>.
    // Par exemple :
    var searchResultsList = document.getElementById('searchResultsList');
    searchResultsList.innerHTML = `
        <li>Nom de l'hôtel 1</li>
        <li>Nom de l'hôtel 2</li>
        <!-- Ajoutez d'autres éléments de liste avec les détails des hôtels -->
    `;
}

// Fonction pour masquer les résultats de recherche
function hideResults() {
    var searchResultsDiv = document.getElementById('searchResults');
    searchResultsDiv.style.display = 'none';
}

