
function openUpdateModal(id_client) {
  axios.get(`/client/${id_client}`)
    .then(response => {
      const client = response.data;
      const updateClientForm = document.getElementById('updateClientForm');

      // Remplir les champs du formulaire avec les données du client
      updateClientForm.name.value = client.name;
      updateClientForm.last_name.value = client.last_name;
      updateClientForm.principal_contact.value = client.principal_contact;
      updateClientForm.address.value = client.address;
      updateClientForm.emergency_number.value = client.emergency_number;
      updateClientForm.gender.value = client.gender;
      updateClientForm.cin.value = client.cin;
      updateClientForm.email.value = client.email;

      // Ouvrir la modal de mise à jour
      const updateClientModal = new bootstrap.Modal(document.getElementById('updateClientModal'));
      updateClientModal.show();
    })
    .catch(error => {
      console.error('Erreur lors de la récupération du client:', error);
    });
}
openUpdateModal(id_client);

function editClient(id_client) {
// Utilisez Axios pour récupérer les informations du client via une requête GET
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
editClient(id_client);

// Fonction pour mettre à jour le client
document.getElementById('updateClientForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const last_name = document.getElementById('last_name').value;
  const principal_contact = document.getElementById('principal_contact').value;
  const address = document.getElementById('address').value;
  const emergency_number = document.getElementById('emergency_number').value;
  const gender = document.getElementById('gender').value;
  const cin = document.getElementById('cin').value;
  const email = document.getElementById('email').value;

  // Envoyer les informations mises à jour au serveur
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
      window.location.href = '/allClient.html';
    })
    .catch(error => {
      console.error('Erreur lors de la mise à jour du client:', error);
    });
});
