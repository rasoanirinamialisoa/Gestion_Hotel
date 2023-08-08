// Fonction pour récupérer la liste des paiements avec les réceptionnistes associés
function getPaymentsWithReceptionists() {
    axios.get('/execute-query-5')
      .then(response => {
        const payments = response.data;
        const tableBody = document.getElementById('paymentRecepTablesBody');
        tableBody.innerHTML = '';
        payments.forEach(payment => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <p class="text-xs text-secondary mb-0">${payment.payment_date}</p>
                </div>
              </div>
            </td>
            <td class="align-middle text-center">
              <span class="text-xs text-secondary mb-0">${payment.amount_paid}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-xs text-secondary mb-0">${payment.number_nigth}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${payment.room_occupied}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${payment.deadline_payment}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${payment.first_name}</span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">${payment.last_name}</span>
            </td>
          `;
          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des paiements:', error);
      });
  }
  getPaymentsWithReceptionists();
  