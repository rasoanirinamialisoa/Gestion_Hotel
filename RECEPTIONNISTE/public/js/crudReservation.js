const axios = require('axios');
// Fonction pour récupérer la liste des réservations depuis le serveur
function getReservations() {
  axios.get('/reservation')
    .then(response => {
      const reservations = response.data;
      const tableBody = document.getElementById('reservationTablesBody');
      tableBody.innerHTML = '';
      reservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
              </div>
              <div class="d-flex flex-column justify-content-center">
                <p class="text-xs text-secondary mb-0">${reservation.date_arrived}</p>
              </div>
            </div>
            </td>

            <td>
            <p class="text-xs text-secondary mb-0">${reservation.leaving_date}</p>
            </td>

            <td class="align-middle text-center text-sm">
            <span class="text-xs text-secondary mb-0"> ${reservation.number_of_person}</span>
            </td>
           
             
            <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold"> ${reservation.is_cancelled}  </span>
          </td>
    
            <td>
              <button class="badge badge-sm bg-gradient-success border-none" onclick="editReservation(${reservation.id_reservation})">Modifier</button>
              <button class="badge badge-sm bg-gradient-secondary border-none" onclick="deleteReservation(${reservation.id_reservation})">Supprimer</button>
            </td>
          `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des réservations:', error);
    });
}





// Fonction pour supprimer une réservation
function deleteReservation(id_reservation) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?')) {
    axios.delete(`/reservation/${id_reservation}`)
      .then(() => {
        getReservations(); // Mettre à jour la liste après la suppression
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de la réservation:', error);
      });
  }
}

// Fonction pour rediriger vers la page de mise à jour de la réservation
function editReservation(id_reservation) {
  window.location.href = `/updateReservation.html?id_reservation=${id_reservation}`;
}

// Appeler getReservations() pour afficher la liste des réservations au chargement de la page
getReservations();
