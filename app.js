// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById("fetch-btn");
const dataContainer = document.getElementById("data-container");
const API_URL = "https://dragonball-api.com/api/characters";

fetchBtn.addEventListener("click", () => {
    let URL = API_URL + '?gender=Male';
    fetch(URL)
    .then((response) => {
        if (!response.ok) {
        throw new Error("Error en la solicitud");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        
      // Completar: renderizar datos en el contenedor
        const hombres = data;
        mostrarDatos(hombres);
    })
    .catch((error) => {
        console.error("Error:", error);
        dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

// Implementa las Solicitudes con Axios
const axiosBtn = document.getElementById("axios-btn");
axiosBtn.addEventListener("click", () => {
    let URL = API_URL + '?gender=Female';
    axios.get(URL)
    .then(response => {
        console.log(response);
        const mujeres = response.data;
               
        mostrarDatos(mujeres);
    })
    .catch(error => {
        console.error("Error:", error);
        dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

// Ejemplo de función de renderizado:
function mostrarDatos(characters) {
    dataContainer.innerHTML = "";
    console.log(characters);

    characters.forEach((character) => {
    const div = document.createElement("div");
    div.classList.add("character");
    div.innerHTML = `
        <h3>${character.name}</h3>
        <p>${character.race || "Sin raza"}</p>
        <img src="${character.image}" alt="${character.name}" width=100>
        `;
    dataContainer.appendChild(div);
    });
}