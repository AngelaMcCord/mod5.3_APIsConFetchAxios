// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById("fetch-btn");
const dataContainer = document.getElementById("data-container");
const API_URL = "https://thronesapi.com/api/v2/Characters";

fetchBtn.addEventListener("click", () => {
    fetch(API_URL)
    .then((response) => {
        if (!response.ok) {
        throw new Error("Error en la solicitud");
        }
        return response.json();
    })
    .then((data) => {
      // Completar: renderizar datos en el contenedor
        const hombres = data.filter(c => c.gender === "Male");
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
    axios.get(API_URL)
    .then(response => {
        const mujeres = response.data.filter(c => c.gender === "Female");
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
    characters.forEach((character) => {
    const div = document.createElement("div");
    div.classList.add("character");
    div.innerHTML = `
        <h3>${character.fullName}</h3>
        <p>${character.title || "Sin título"}</p>
        <img src="${character.imageUrl}" alt="${character.fullName}">
        `;
    dataContainer.appendChild(div);
    });
}