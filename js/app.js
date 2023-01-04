
const banderas = document.getElementById('flags')

//Cargar todo HTML
document.addEventListener("DOMContentLoaded" , e => {
    fetchAPI()

})

//Función para consumo de API

const fetchAPI = async () => {

    try {

        const res = await fetch('https://restcountries.com/v2/all')
        const datos = await res.json()
        info_banderas(datos)
        busqueda(datos)
        filtrando(datos)

    }catch(error){
        console.log(error)
    }

}

//Extracción datos de interés para cada país que hace parte de la API

const info_banderas = datos => {
    let elementos = ''
    datos.forEach(element => {
        elementos += `
        <article class="card">
        <img src=${element.flag} alt="Bandera de ${element.name}" class="img-flag">        
        <div class="card-content">
            <h3>${element.name}</h3>  
            <p>                                                                           
                <strong>Capital:</strong>
                ${element.capital}
            </p>
            <p>
                <strong>Gentilicio:</strong>
                ${element.demonym}
            </p>
            <p>
                <strong>Área total:</strong>
                ${element.area} km2
            </p>

            <p class="region">
            <strong>Región:</strong>
            ${element.region}
        </p>

        </div>
    </article>
        `
    });   
    banderas.innerHTML = elementos

}




