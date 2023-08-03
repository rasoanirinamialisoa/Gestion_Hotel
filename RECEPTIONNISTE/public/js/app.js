
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
  