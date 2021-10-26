




  const getMovie = (name ) =>{

    return fetch(`http://www.omdbapi.com/?t=${name}&apikey=5621493a`).then(res => res.json())
   

  }
  const getcountries  = (name ) =>{

    return fetch(`https://restcountries.com/v3.1/name/${name}`).then(res => res.json()).then(value=>value && value.length  && value[0])
   

  }

//GETS COUNTRIES AND MOVIES FROM API
  getMovie('batman').then((movie)=> console.log(movie)) 
  getcountries('georgia').then((countrie)=> console.log(countrie)) 

//GETS TIME HOW MANY YEARS AGO MOVIE GOT RELEASED
  function movieAge(title){
    return getMovie(title)
          .then((movie) =>( new Date()).getFullYear()- movie.Year)
          .then((year) => console.log(year))
  }
   
    //CHECK
    movieAge("batman")

// GETS ARRAY OF NAMES OF MOVIE ACTORS
    function getActors(title){
      return getMovie(title).then((movie)=> movie.Actors.split(' ') )
      .then (value=> value.filter((element, index) => {
        return index % 2 === 0;
      })).then(value => console.log(value))
    }
      
    
    //CHECK
    getActors("batman")



// GETS CURRENCY OF COUNTRY BY MOVIE 
function getCurrency (title) {

  return getMovie(title)
  .then(movie=> movie.Country)
  .then(country=> country.split(',')[0])
  .then(country => getcountries(country))
  .then(data=> console.log(data.currencies))
}


    //CHECK
    getCurrency ("batman") 


// GETS SUM OF LENGTH OF MOVIE TIMES
async function getTime(title1,title2,title3){
 
  await  getMovie(title1).then(movie => a=Number(movie.Runtime.split(' ')[0]))
  await  getMovie(title2).then(movie => b=Number(movie.Runtime.split(' ')[0]))
  await  getMovie(title3).then(movie => c= Number(movie.Runtime.split(' ')[0]))
         const sum =(a+b+c)
         
  return console.log(`overal length of movies is ${sum} mins` )

}

    //CHECK
    getTime("Avatar","batman","Moana")





//GETS OVERAL POPULATION OF  COUNTRIES IN WHICH MOVIES GOT RELEASED
async function getPopulation(title1,title2,title3){
 
  await  getMovie(title1).then(movie => movie.Country.split(',')[0])
        .then(data => getcountries(data))
        .then(data=>x=Number(data.population))
  await  getMovie(title2).then(movie => movie.Country.split(',')[0])
        .then(data => getcountries(data))
        .then(data=>y=Number(data.population))
  await  getMovie(title3).then(movie => movie.Country.split(',')[0])
        .then(data => getcountries(data))
        .then(data=>z=Number(data.population))

 return console.log(x+y+z)

}
    //CHECK  
    getPopulation("georgia","germany","armenia")









