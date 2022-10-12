var divResults = document.querySelector("#Resultado");

const verUsers = async () => {
  const repuesta = await fetch("https://jsonplaceholder.typicode.com/photos");
  const json = await repuesta.json();
  console.log(json);
  json.map((user) => {
    let divUser = document.createElement("div");
    divUser.className = "user";
    divUser.innerHTML = `
    <img src="${user.url}" width="100%">
        <p>${user.title}</p>
        `;
    divResults.appendChild(divUser);
  });
};

const clearUsers = async () => {
  divResults.innerHTML = "";
};