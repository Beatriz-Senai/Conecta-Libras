// MENU
  const userName = document.getElementById('user-name');
  const userAvatar = document.getElementById('user-avatar');
  const logoutPopup = document.getElementById('logout-popup');
  const cancelBtn = document.getElementById('cancel-btn');
  const logoutBtn = document.getElementById('logout-btn');

  userName.addEventListener('click', () => {
    logoutPopup.style.display = 'flex';
  });
  userAvatar.addEventListener('click', () => {
    logoutPopup.style.display = 'flex';
  });

  cancelBtn.addEventListener('click', () => {
    logoutPopup.style.display = 'none';
  });

  logoutBtn.addEventListener('click', () => {
    const popupContent = logoutPopup.querySelector('.popup-content');
    popupContent.innerHTML = `
      <h3>Você foi deslogada com sucesso!</h3>
      <button id="close-popup-btn">Fechar</button>
    `;

    const closeBtn = document.getElementById('close-popup-btn');
    closeBtn.addEventListener('click', () => {
      logoutPopup.style.display = 'none';
      window.location.href = "semcadastro.php";
    });
  });