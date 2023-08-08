// Fonction pour ouvrir la modal
function openModal() {
  $('#resultsModal').modal('show');
}

// Fonction pour effectuer la recherche d'hôtels
async function searchHotels() {
  // Récupérez les valeurs saisies dans les champs du formulaire
  const location = document.getElementById('location').value;
  const checkIn = document.getElementById('check-in').value;
  const checkOut = document.getElementById('check-out').value;
  const roomType = document.getElementById('room-type').value;

  try {
      // Effectuez la requête à l'aide d'Axios avec les paramètres de recherche
      const response = await axios.get('/execute-custom-query', {
          params: {
              location: location,
              checkIn: checkIn,
              checkOut: checkOut,
              roomType: roomType
              // ... Ajoutez d'autres paramètres si nécessaire
          }
      });

      // Obtenez les résultats de la réponse
      const hotels = response.data;

      // Affichez les résultats obtenus (par exemple, en ajoutant les hôtels à un élément HTML)
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';

      hotels.forEach(hotel => {
          const hotelInfo = document.createElement('p');
          hotelInfo.textContent = `${hotel.hotel_name} - ${hotel.address}`;
          resultsContainer.appendChild(hotelInfo);
      });

      // Ouvrez la modal pour afficher les résultats
      openModal();
  } catch (error) {
      console.error('Erreur lors de la requête:', error);
  }
}
