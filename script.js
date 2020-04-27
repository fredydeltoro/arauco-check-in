const onIpunt = (input) => {
  // fetch(url).then((res) => {
  //   lo que responda haces que quieras aqui con ello
  // });
  postSimulated(input.value, 'planta1').then((res) => {
    console.log('que mas quieres que haga con esto ====>', res);
  })
};


// aqui va estar un webservice simulado

const postSimulated = (user, planta) => {
  console.log('los valores que se mandan al web service ===>', user, planta);
  return new Promise((resolve, reject) => {
    resolve({
      status: 200,
      data: {
        "photo": "https://f001.backblazeb2.com/file/lkf-media/profile_pictures/profile_pic_1328.jpg",
        "autorized": true,
      }
    })
  });;
}
