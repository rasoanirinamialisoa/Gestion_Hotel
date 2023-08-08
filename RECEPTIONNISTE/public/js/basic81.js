function fetchTotalMobileMoneyAmount() {
    axios.get('/execute-query-8')
      .then(response => {
        const totalMobileMoneyPayments = response.data.total_mobile_money_payments;
        console.log('réponse serveur', totalMobileMoneyPayments);
        const totalMobileMoneyAmountElement = document.getElementById('totalMobileMoneyAmount');
        totalMobileMoneyAmountElement.textContent = `Total : ${totalMobileMoneyPayments}`;
      })
      .catch(error => {
        console.error('Erreur de la récuparation de la somme :', error);
      });

      
}
    fetchTotalMobileMoneyAmount();
           

  
