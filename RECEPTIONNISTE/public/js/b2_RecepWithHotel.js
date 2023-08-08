
// Fonction pour récupérer la liste des réceptionnistes avec leurs hôtels
function getReceptionistsWithHotels() {
  axios.get('/execute-query-4')
    .then(response => {
      const receptionists = response.data;
      const tableBody = document.getElementById('receptionistTablesBody');
      tableBody.innerHTML = '';
      receptionists.forEach(receptionist => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex">
                <p class="text-xs text-secondary mb-0">${receptionist.first_name}</p>
              </div>
            </div>
          </td>
          <td class="align-middle text-center">
          <span class="text-xs text-secondary mb-0">${receptionist.last_name}</span>
        </td>
          <td class="align-middle text-center">
            <span class="text-xs text-secondary mb-0">${receptionist.email}</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${receptionist.work_contact}</span>
          </td>
          <td class="align-middle text-center">
            <span class="text-secondary text-xs font-weight-bold">${receptionist.hotel_name}</span>
          </td>
          <td>
        `;
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des réceptionnistes:', error);
    });
}
getReceptionistsWithHotels();