const code = document.querySelector('#codigo');
const image = document.querySelector('#user-image');
const name = document.querySelector('#name');
const company = document.querySelector('#company');
const date = document.querySelector('#date');
const logText = document.querySelector('#log-text');
const logIcon = document.querySelector('#log-icon');
const locationText = document.querySelector('#location-text');
const authContainer = document.querySelector('.auth-status');
const authText = document.querySelector('#auth-text');
const urlParms = new URLSearchParams(window.location.search);
const locationParam = urlParms.get('location');


locationText.textContent = capitalize(locationParam);

function onClick() {

  fetch('https://preprod.linkaform.com/api/infosync/scripts/run/', {
    method: 'POST',
    body: JSON.stringify({
      script_id: 55050,
      location: locationParam,
      code: code.value,
    }),
    headers:{
      'Content-Type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      image.src = res.response.user_pic.file_url;
      name.textContent = res.response.user_name;
      company.textContent = res.response.company;
      date.textContent = res.response.date

      if (res.response.log_type === 'check-in') {
        logText.textContent = 'Entrada';
        logIcon.classList.remove('fa-sign-out');
        logIcon.classList.add('fa-sign-in');
      } else {
        logText.textContent = 'Salida';
        logIcon.classList.remove('fa-sign-in');
        logIcon.classList.add('fa-sign-out');
      }

      if (res.response.status === 'Authorized') {
        authText.textContent = 'Autorizado';
        authContainer.classList.remove('unauthorized');
        authContainer.classList.add('autorized');
      } else {
        authText.textContent = 'Desautorizado';
        authContainer.classList.remove('autorized');
        authContainer.classList.add('unauthorized');
      }

    }
  });
};

function capitalize(string) {
  return string.replace('_', ' ')
               .split(' ')
               .map((str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`)
               .join(' ');
};
