const input = document.getElementById("buscar");
const buscar = document.querySelector(".btn");
const resultados = document.querySelector(".lista-peliculas");
let peliculas = [];
let paginaActual = 1;
let totalPaginas = 1;
let terminoBusqueda = "";
let paginacion = document.querySelector(".paginacion");
let explorar = document.querySelector(".explorar");
let totalResults = document.querySelector(".total-results");
const resultadosPorPagina = 10;

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    buscar.click();
  }
});

async function buscadorDePeliculas(pelicula, pagina = 1) {
  try {
    resultados.classList.remove("active");
    resultados.innerHTML = "";
    paginacion.innerHTML = "";

    const response = await fetch(
      "https://www.omdbapi.com/?s=" +
        pelicula +
        "&apikey=650d6450&page=" +
        pagina,
    );
    console.log(response.status);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error(
        "Impossible de trouver le film. Status: " + response.status,
      );
    }

    const data = await response.json();
    console.log(data);

    if (data.Response === "False") {
      const div = document.createElement("div");
      const p = document.createElement("p");
      const span = document.createElement("span");

      div.classList.add("vacio");

      p.innerText =
        "Nous n'avons trouvé aucun film portant ce titre. Essayez une autre recherche.";
      span.innerText = "🔎";
      explorar.innerText = 'Résultats pour "' + terminoBusqueda + '"';
      totalResults.classList.add("oculto");

      div.appendChild(span);
      div.appendChild(p);
      resultados.appendChild(div);
      return;
    } 

    totalResults.classList.remove("oculto");

    peliculas = data.Search;
    paginaActual = pagina;
    totalPaginas = Math.ceil(Number(data.totalResults) / resultadosPorPagina);
    totalResults.innerText = data.totalResults + " résultats";

    requestAnimationFrame(function () {
      mostrarPeliculas(data.Search);
    });

    crearPaginacion();
  } catch (error) {
    console.log("Quelque chose n'a pas fonctionné: " + error.message);
    const div = document.createElement("div");
    const errorMsg = document.createElement("p");

    errorMsg.innerText = "Impossible de trouver le film";

    div.classList.add("vacio");

    div.appendChild(errorMsg);
    resultados.appendChild(div);
  }
}

buscar.addEventListener("click", function () {
  terminoBusqueda = input.value;

  if (terminoBusqueda === "") {
    return;
  }

  paginaActual = 1;

  buscadorDePeliculas(terminoBusqueda, paginaActual);
});

function mostrarPeliculas(lista) {
  resultados.innerHTML = "";
  resultados.classList.add("active");

  explorar.innerText = 'Résultats pour "' + terminoBusqueda + '"';

  for (let i = 0; i < lista.length; i++) {
    let pelicula = lista[i];

    const div = document.createElement("div");
    const divImg = document.createElement("div");
    const titulo = document.createElement("h2");
    const año = document.createElement("p");
    const poster = document.createElement("img");

    titulo.innerText = pelicula.Title;
    año.innerText = pelicula.Year;
    poster.src = pelicula.Poster;
    poster.setAttribute("alt", "Poster non disponible");

    div.classList.add("card");
    titulo.classList.add("title");
    año.classList.add("year");
    resultados.classList.add("active");

    divImg.appendChild(poster);
    div.appendChild(divImg);
    div.appendChild(titulo);
    div.appendChild(año);

    resultados.appendChild(div);

    poster.addEventListener("error", function () {
      const texto = document.createElement("span");

      texto.textContent = poster.alt;

      poster.replaceWith(texto);

      texto.classList.add("img-error");
    });
  }
}

function crearPaginacion() {
  paginacion.innerHTML = "";

  if (totalPaginas <= 1) {
    return;
  }

  const anterior = document.createElement("button");
  const siguiente = document.createElement("button");
  const numeroPagina = document.createElement("span");

  anterior.innerText = "← Précédent";
  siguiente.innerText = "Suivant →";

  numeroPagina.innerText = "Page " + paginaActual + "de " + totalPaginas;

  anterior.disabled = paginaActual === 1;
  siguiente.disabled = paginaActual === totalPaginas;

  anterior.addEventListener("click", function () {
    buscadorDePeliculas(terminoBusqueda, paginaActual - 1);
  });

  siguiente.addEventListener("click", function () {
    buscadorDePeliculas(terminoBusqueda, paginaActual + 1);
  });

  paginacion.appendChild(anterior);
  paginacion.appendChild(numeroPagina);
  paginacion.appendChild(siguiente);
}
