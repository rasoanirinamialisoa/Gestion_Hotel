
// Fonction pour récupérer la liste des employees avec leur hotel
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
            <p class="text-xs text-secondary">${client.last_name}</p>
            </td>

            <td class="align-middle text-center">
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
            <td>
            <button class="badge badge-sm bg-gradient-success"
            data-bs-toggle="modal"
            data-bs-target="#updateClientModal"
            data-client-id="${client.id_client}"
            onclick="openUpdateModal(${client.id_client})">
              Modifier
            </button>
              <button class="badge badge-sm bg-gradient-secondary" onclick="deleteClient(${client.id_client})">Supprimer</button>
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

    // Fonction pour ouvrir la modal de mise à jour et pré-remplir les champs
    function openUpdateModal(id_client) {
      const btnMaj = document.getElementById('maj');
      btnMaj.setAttribute('data-client-id', id_client);

      axios.get(`/client/${id_client}`)
        .then(response => {
          const client = response.data;
          // Remplissez le formulaire dans la modal avec les informations du client
          document.getElementById('name').value = client.name;
          document.getElementById('last_name').value = client.last_name;
          document.getElementById('principal_contact').value = client.principal_contact;
          document.getElementById('address').value = client.address;
          document.getElementById('emergency_number').value = client.emergency_number;
          document.getElementById('gender').value = client.gender;
          document.getElementById('cin').value = client.cin;
          document.getElementById('email').value = client.email;


          // Ouvrez la modal
          $('#updateClientModal').modal('show');
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du client:', error);
        });
    }


    // Récupérer tous les boutons de mise à jour dans la page
    const updateButtons = document.querySelectorAll('.update-client-button');

    // Attacher un gestionnaire d'événements à chaque bouton de mise à jour
    updateButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Récupérer l'ID du client à partir de l'attribut data-client-id
        const id_client = this.getAttribute('data-client-id');

        // Récupérer les valeurs des champs du formulaire
        const name = document.getElementById('name').value;
        const last_name = document.getElementById('last_name').value;
        const principal_contact = document.getElementById('principal_contact').value;
        const address = document.getElementById('address').value;
        const emergency_number = document.getElementById('emergency_number').value;
        const gender = document.getElementById('gender').value;
        const cin = document.getElementById('cin').value;
        const email = document.getElementById('email').value;


        // Envoyer les informations mises à jour au serveur via Axios
        axios.put(`/client/${id_client}`, {
          name,
          last_name,
          principal_contact,
          address,
          emergency_number,
          gender,
          cin,
          email
        })
          .then(() => {
            // Rediriger vers la page allClient.html après la mise à jour du client
            window.location.href = '/pages/allClient.html';
          })
          .catch(error => {
            console.error('Erreur lors de la mise à jour du client:', error);
          });
      });
    });


// Fonction pour supprimer un client
function deleteClient(id_client) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
    axios.delete(`/client/${id_client}`)
      .then(() => {
        getClients(); // Mettre à jour la liste après la suppression
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du client:', error);
      });
  }
}

getClients();
openUpdateModal(id_client);

