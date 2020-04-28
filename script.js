const code = document.querySelector('#codigo');
const image = document.querySelector('#user-image');
const name = document.querySelector('#name');
const company = document.querySelector('#company');
const date = document.querySelector('#date');

const onClick = () => {

  fetch('https://preprod.linkaform.com/api/infosync/scripts/run/', {
    method: 'POST',
    body: JSON.stringify({
      script_id: 55050,
      location: 'durango',
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
    }
  });
};
