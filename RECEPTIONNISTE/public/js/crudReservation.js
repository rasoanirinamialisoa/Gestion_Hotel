// Fonction pour récupérer la liste des réservations depuis le serveur
function getReservations() {
  axios.get('/reservation')
    .then(response => {
      const reservations = response.data;
      console.log('Réponse de serveur,', reservations);
      const tableBody = document.getElementById('reservationTablesBody');
      tableBody.innerHTML = '';
      reservations.forEach(reservation => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${reservation.date_arrived}</td>
          <td>${reservation.leaving_date}</td>
          <td>${reservation.number_of_person}</td>
          <td>${reservation.is_cancelled}</td>
          <td>
            <button class="badge badge-sm bg-gradient-success"
              data-bs-toggle="modal"
              data-bs-target="#updateReservationModal"
              data-reservation-id="${reservation.id_reservation}"
              onclick="openUpdateModalR(${reservation.id_reservation})">
              Modifier
            </button>
            <button class="badge badge-sm bg-gradient-secondary" onclick="deleteReservation(${reservation.id_reservation})">Supprimer</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des réservations:', error);
    });
}

// Fonction pour ouvrir la modal de mise à jour et pré-remplir les champs
function openUpdateModalR(id_reservation) {
  const btnMaj = document.getElementById('maj');
  btnMaj.setAttribute('data-reservation-id', id_reservation);

  axios.get(`/reservation/${id_reservation}`)
    .then(response => {
      const reservation = response.data;
      // Remplissez le formulaire dans la modal avec les informations de la réservation
      document.getElementById('date_arrived').value = reservation.date_arrived;
      document.getElementById('leaving_date').value = reservation.leaving_date;
      document.getElementById('number_of_person').value = reservation.number_of_person;
      document.getElementById('is_cancelled').checked = reservation.is_cancelled;

      // Ouvrez la modal
      $('#updateReservationModal').modal('show');
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de la réservation:', error);
    });
}

// Récupérer tous les boutons de mise à jour dans la page
const updateButtonsR = document.querySelectorAll('.update-reservation-button');

// Attacher un gestionnaire d'événements à chaque bouton de mise à jour
updateButtonsR.forEach(button => {
  button.addEventListener('click', function () {
    // Récupérer l'ID de la réservation à partir de l'attribut data-reservation-id
    const id_reservation = this.getAttribute('data-reservation-id');

    // Récupérer les valeurs des champs du formulaire
    const date_arrived = document.getElementById('date_arrived').value;
    const leaving_date = document.getElementById('leaving_date').value;
    const number_of_person = document.getElementById('number_of_person').value;
    const is_cancelled = document.getElementById('is_cancelled').checked;

    // Envoyer les informations mises à jour au serveur via Axios
    axios.put(`/reservation/${id_reservation}`, {
      date_arrived,
      leaving_date,
      number_of_person,
      is_cancelled
    })
      .then(() => {
        // Rediriger vers la page des réservations après la mise à jour
        window.location.href = '/pages/allBook.html';
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour de la réservation:', error);
      });
  });
});


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

// Appel initial pour récupérer les réservations
getReservations();
openUpdateModalR(id_reservation);
