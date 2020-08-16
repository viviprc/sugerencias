const panoramas = (()=>{
  const contenedor = document.getElementById('mostrar')
  const musica = '<iframe width="560" height="315" src="https://www.youtube.com/embed/7AohRaCgLbI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  const pelicula = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_yHxODDr_Fc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  const comida = '<iframe width="560" height="315" src="https://www.youtube.com/embed/_zeG2g94GAo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  
  const ponerMusica = () => contenedor.innerHTML = `<h3>Gayatri Mantram, para meditar activamente.</h3><br>  ${musica}`
  const ponerPelicula = () => contenedor.innerHTML = `<h3>UN BUDA</h3><p>Un joven lucha por evadir su profunda necesidad espiritual, pero la pérdida y el desengaño <br> lo empujan a abandonar su estilo de vida y adentrarse en el abismo de prácticas ascéticas.</p>  ${pelicula}`
  const ponerReceta = () => contenedor.innerHTML = `<h3>Hummus, rico y saludable.</h3>  ${comida}`

  return (tipoDeContenido) => {
      if (tipoDeContenido === 'music') {
          ponerMusica()
      }
      if (tipoDeContenido === 'movie') {
          ponerPelicula()
      }
      if (tipoDeContenido === 'food') {
          ponerReceta()
      }
  }
})();
// {musica: funcion, series: funcion, comida: funcion}
// panoramas es una funcion

const musica = document.getElementById('music')
musica.addEventListener('click', () => panoramas('music'));

const pelicula = document.getElementById('movie')
pelicula.addEventListener('click', () => panoramas('movie'));

const comida = document.getElementById('food')
comida.addEventListener('click', () => panoramas('food'));