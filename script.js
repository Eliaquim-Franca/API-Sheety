let url = 'https://api.sheety.co/21ebeea1f7a2f697883750d5cbacd44c/sheetyApi/mockaro';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.mockaros);
});