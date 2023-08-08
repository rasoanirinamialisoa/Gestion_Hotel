// Fonction pour récupérer la liste des paiements avec les réceptionnistes associés
function getClientNotPay() {
    axios.get('/execute-query-6')
      .then(response => {
        const clients = response.data;
        const tableBody = document.getElementById('basic71');
        tableBody.innerHTML = '';
        clients.forEach(client => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td class="align-middle text-center">
              <span class="text-xs text-secondary mb-0">${client.name}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-xs text-secondary mb-0">${client.last_name}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${client.principal_contact}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${client.address}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${client.email}</span>
            </td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des clients:', error);
      });
  }
  getClientNotPay();
  