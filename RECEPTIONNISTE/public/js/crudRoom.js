
function getRooms() {
  axios.get('/room')
    .then(response => {
      const rooms = response.data;
      console.log('Rponse be oooooooo', rooms);
      const tableBody = document.getElementById('roomsTablesBody');
      tableBody.innerHTML = '';
      rooms.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex flex-column justify-content-center">
                <p class="text-xs text-secondary mb-0">${room.number}</p>
              </div>
            </div>
            </td>

            <td>
            <p class="text-xs text-secondary mb-0">${room.room_type}</p>
            </td>

            <td class="align-middle text-center text-sm">
            <span class="text-xs text-secondary mb-0"> ${room.capacity_room}</span>
            </td>
           
             
            <td>
            <td>
            <button class="badge badge-sm bg-gradient-success"
            data-bs-toggle="modal"
            data-bs-target="#updateReservationModal"
            data-room-id="${room.id_room}"
            onclick="openUpdateModal(${room.id_room})">
              Modifier
            </button>
              <button class="badge badge-sm bg-gradient-secondary" onclick="deleteRoom(${room.id_room})">Supprimer</button>
            </td>
            </td>
          `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des chambres:', error);
    });
}

// Fonction pour ouvrir la modal de mise à jour et pré-remplir les champs
function openUpdateModalRo(id_room) {
  const btnMaj = document.getElementById('maj');
  btnMaj.setAttribute('data-reservation-id', id_room);

  axios.get(`/room/${id_room}`)
    .then(response => {
      const reservation = response.data;
      // Remplissez le formulaire dans la modal avec les informations de la réservation
      document.getElementById('number').value = room.number;
      document.getElementById('room_type').value = room.room_type;
      document.getElementById('capacity_room').value = room.capacity_room;

      // Ouvrez la modal
      $('#updateReservationModal').modal('show');
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de la réservation:', error);
    });
}

// Récupérer tous les boutons de mise à jour dans la page
const updateButtonsR = document.querySelectorAll('.update-room-button');

// Attacher un gestionnaire d'événements à chaque bouton de mise à jour
updateButtonsR.forEach(button => {
  button.addEventListener('click', function () {
    // Récupérer l'ID de la réservation à partir de l'attribut data-reservation-id
    const id_room = this.getAttribute('data-room-id');

    // Récupérer les valeurs des champs du formulaire
    const number = document.getElementById('number').value;
    const room_type = document.getElementById('room_type').value;
    const capacity_room = document.getElementById('capacity_room').value;
   

    // Envoyer les informations mises à jour au serveur via Axios
    axios.put(`/reservation/${id_room}`, {
      number,
      room_type,
      capacity_room,
    })
      .then(() => {
        // Rediriger vers la page des réservations après la mise à jour
        window.location.href = '/pages/allRoom.html';
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour de la chambre:', error);
      });
  });
});


// Fonction pour supprimer une chambre
function deleteRoom(id_room) {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette chambre ?')) {
    axios.delete(`/room/${id_room}`)
      .then(() => {
        getRooms(); // Mettre à jour la liste après la suppression
      })
      .catch(error => {
        console.error('Erreur lors de la suppression de la chambre:', error);
      });
  }
}

// Appeler getRooms() pour afficher la liste des chambres au chargement de la page
getRooms();
openUpdateModalRo(id_room);

