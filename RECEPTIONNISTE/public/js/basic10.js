
const form = document.getElementById('queryForm');
const resultContainer = document.getElementById('resultContainer');
const resultBody = document.getElementById('basic10');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameProvince = document.getElementById('province_name').value;
  console.log('Réponse du serveur :', nameProvince); 

  try {
    const response = await axios.post('/execute-query-10', { province_name: nameProvince});
    const data = response.data;

    console.log('Réponse du serveur A:', response); 
    console.log('Réponse du serveur B:', data); // Affiche la réponse du serveur dans la console

    // Afficher les résultats dans le tableau
    resultBody.innerHTML = '';
    data.forEach(row => {
      const rowElement = document.createElement('tr');
      rowElement.innerHTML = `
        <td>
        <p class="text-xs text-secondary">${row.province_name}</p>
        </td>
      `;
      resultBody.appendChild(rowElement);
    });

    // Afficher les résultats
    resultContainer.style.display = 'block';
  } catch (error) {
    console.error('Erreur lors de l\'exécution de la requête:', error);
  }
});
