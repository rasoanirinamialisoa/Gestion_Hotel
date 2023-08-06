
function getRooms() {
  axios.get('/room')
    .then(response => {
      const rooms = response.data;
      const tableBody = document.getElementById('roomsTablesBody');
      tableBody.innerHTML = '';
      rooms.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <div class="d-flex px-2 py-1">
              <div>
                <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
              </div>
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
              <button class="badge badge-sm bg-gradient-success" onclick="editRoom(${room.id_room})">Modifier</button>
              <button class="badge badge-sm bg-gradient-secondary" onclick="deleteRoom(${room.id_room})">Supprimer</button>
            </td>
          `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des chambres:', error);
    });
}

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

// Fonction pour rediriger vers la page de mise à jour de la chambre
function editRoom(id_room) {
  window.location.href = `/updateRoom.html?id_room=${id_room}`;
}

// Appeler getRooms() pour afficher la liste des chambres au chargement de la page
getRooms();
