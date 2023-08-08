const form = document.getElementById('queryForm');
const resultContainer = document.getElementById('resultContainer');
const resultBody = document.getElementById('resultTable');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const hotelName = document.getElementById('hotel_name').value;
  const roomType = document.getElementById('room_type').value;
  try {
    const response = await axios.post('/execute-query', {
      hotelName,
      roomType
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      const data = response.data;
      // Afficher les résultats dans le tableau
      resultBody.innerHTML = '';
      data.forEach(room => {
        const rowElement = document.createElement('tr');
        rowElement.innerHTML = `
          <td>${room.id_room}</td>
          <td>${room.room_type}</td>
          <td>${room.hotel_name}</td>
        `;
        resultBody.appendChild(rowElement);
      });
      // Afficher les résultats
      resultContainer.style.display = 'block';
    } else {
      console.error('La requête a échoué avec le statut :', response.status);
    }
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête :', error);
  }
});
