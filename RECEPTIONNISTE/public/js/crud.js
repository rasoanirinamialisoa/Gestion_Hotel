
// Fonction pour récupérer la liste des clients depuis le serveur
function getClients() {
  axios.get('/client')
    .then(response => {
      const clients = response.data;
      const tableBody = document.getElementById('clientsTableBody');
      tableBody.innerHTML = '';
      clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${client.name}</td>
                    <td>${client.last_name}</td>
                    <td>${client.principal_contact}</td>
                    <td>${client.address}</td>
                    <td>${client.emergency_number}</td>
                    <td>${client.gender}</td>
                    <td>${client.cin}</td>
                    <td>${client.email}</td>
                    <td>
                      <button onclick="editClient(${client.id_client})">Modifier</button>
                      <button onclick="deleteClient(${client.id_client})">Supprimer</button>
                    </td>
                `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des clients:', error);
    });
}

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

// Fonction pour rediriger vers la page de mise à jour du client
function editClient(id_client) {
  window.location.href = `/updateClient.html?id_client=${id_client}`;
}
// Appeler getClients() pour afficher la liste des clients au chargement de la page
getClients();

