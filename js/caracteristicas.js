//Barra de búsqueda

const buscando = document.getElementById('search');
const inputSearch = document.getElementById('inputSearch');

const busqueda = (datos) => {
    
    buscando.addEventListener('keyup', async(e) => {
        e.preventDefault()

        const textoIngresado = inputSearch.value.toLowerCase()

        const dataFiltrada = datos.filter(element => {                //información escrita en la barra
            const dataAPI = element.name.toLowerCase()               //información proveniente de la API
            if (dataAPI.indexOf(textoIngresado) !== -1) {            // validación de las dos info anteriores
                return element
            }
        })
        info_banderas(dataFiltrada)
        region = info_banderas(element.region)
    
    })
}

// Mostrar y ocultar regiones (elementos li en lista ul filtro por región)

filter.addEventListener('click', () => {
	filter.classList.toggle('open');
});


//Filtro por región

const filtrar = document.getElementById('filter');
const filtrosRegion = filtrar.querySelectorAll('li');

filtrosRegion.forEach(filter => {
	filter.addEventListener('click', () => {
		const value = filter.innerText;
		const regionPais = document.querySelectorAll('.region');

		regionPais.forEach(region => {
			if (region.innerText.includes(value) || value === 'All') {
				// .card -> .card-body -> .country-region
				region.parentElement.parentElement.style.display = 'block';
			} else {
				region.parentElement.parentElement.style.display = 'none';
			}
		});
	})
})


