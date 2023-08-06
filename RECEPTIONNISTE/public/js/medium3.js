// Fonction pour récupérer la liste des clients depuis le serveur
function getClients() {
    axios.get('/client')
      .then(response => {
        const clients = response.data;
        const tableBody = document.getElementById('clientTablesBody');
        tableBody.innerHTML = '';
        clients.forEach(client => {
          const row = document.createElement('tr');
          row.innerHTML = `
                    
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="user1">
                </div>
                <div class="d-flex">
                  <p class="text-xs text-secondary mb-0">${client.name}</p>
                </div>
              </div>
              </td>
  
              <td>
              <p class="text-xs text-secondary mb-0">${client.last_name}</p>
              </td>
  
              <td class="align-middle text-center text-sm">
              <span class="text-xs text-secondary mb-0"> ${client.principal_contact}</span>
              </td>
  
              <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold"> ${client.address}  </span>
              </td>
  
              <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold"> ${client.emergency_number}  </span>
              </td>
  
              <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold"> ${client.gender}  </span>
              </td>
  
              <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold"> ${client.cin}  </span>
              </td>
  
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold"> ${client.email}  </span>
          </td>
  
              <td>
              <!-- Dans la boucle où vous affichez la liste des clients -->
              <td>
              <button class="badge badge-sm bg-gradient-success border-none"
              data-bs-toggle="modal"
              data-bs-target="#updateClientModal"
              data-client-id="${client.id_client}"
              onclick="openUpdateModal(${client.id_client})">
        Modifier
      </button>
                <button class="badge badge-sm bg-gradient-secondary border-none" onclick="deleteClient(${client.id_client})">Supprimer</button>
              </td>
              
              </td>
                  `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des clients:', error);
      });
  }


    const form = document.getElementById('queryForm');
    const resultContainer = document.getElementById('resultContainer');
    const resultBody = document.getElementById('resultBody');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const hotelName = document.getElementById('hotel_name').value;
      const roomType = document.getElementById('room_type').value;

      try {
        const response = await axios.post('/execute-query', {hotelName: hotel_name,roomType: room_type });
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
      } catch (error) {
        console.error('Erreur lors de l\'exécution de la requête:', error);
      }
    });
