
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('successModal');
    const closeModalButton = modal.querySelector('.close');
  
    closeModalButton.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  
    // Récupérer l'URL actuelle pour vérifier si le formulaire a été soumis avec succès
    const currentUrl = window.location.href;
    const successUrl = currentUrl.split('?')[0] + '?success=true';
  
    // Vérifier si l'URL contient le paramètre "success=true"
    if (currentUrl === successUrl) {
      modal.style.display = 'block';
    }
  });
  

  
function fetchTotalMobileMoneyAmount() {
  axios.get('/execute-query-8')
      .then(response => {

          const totals = response.data;
          console.log('réponse de serveur', totals)
          const textBody = document.getElementById('totalMobileMoneyAmount');
          textBody.innerHTML = '';
          totals.forEach(total => {
              const row = document.createElement('tr');
              row.innerHTML = `
            <td class="align-middle text-center">
              <span class="text-xs text-secondary mb-0">${total.total_mobile_money_payments}</span>
            </td>
          `;
              textBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Erreur lors du calcul du total des paiements Mobile Money:', error);
      });
}

$('#totalMobileMoneyModal').modal({
  backdrop: false
});

// Attachez un écouteur d'événement pour le moment où le modal est affiché
$('#totalMobileMoneyModal').on('show.bs.modal', function (event) {
  // Récupérez la somme totale et mettez à jour le contenu du modal
  fetchTotalMobileMoneyAmount();
});

