let peliculas =[

    {nombre:"Harry Potter", genero:"ciencia ficcion",costo:2000},
    {nombre:"Dragon Ball Super", genero:"anime",costo:3000},
    {nombre:"Wakanda Foreva",genero:"ciencia ficcion",costo:5000},
    {nombre:"Django sin cadenas",genero:"ciencia ficcion",costo:1500},
    {nombre:"El viaje de chigui",genero:"anime",costo:60},
]
let filtro=peliculas.filter(pelicula=> pelicula.costo>=2000)
console.log(filtro)



let mapa = peliculas.map(function(pelicula){
    return pelicula.costo= pelicula.costo /1000
})
    console.log(peliculas)


    let mapa1 = peliculas.map(function(pelicula){

        return pelicula.nombre = "esteban"
    })
    console.log(peliculas)