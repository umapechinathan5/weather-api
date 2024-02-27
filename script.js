const container = document.createElement("div");
container.className = "container";
container.id="container";
document.body.append(container);
const row = document.createElement("div");
row.classList.add("row");
row.id = "row";
container.appendChild(row);


fetch("https://restcountries.com/v3.1/all").then((response)=>
  response.json()
).then((data)=>{
  const cards = document.getElementById("row");
  
  data.forEach((element) => {
   
   const card = document.createElement("div");
   card.classList.add("card","col-sm-12","col-lg-4");
   const header = document.createElement("div");
   header.className = "card-header";
   header.innerHTML = `<h1>${element.name.common}</h1>`;
   card.appendChild(header);
   const cardBody = document.createElement("div");
   cardBody.className = "card-body";
   cardBody.innerHTML = `<img src= ${element.flags.png} height = "40%" width = "80%"></img>
   <p>Capital : ${element.capital}</p>
   <p>Region : ${element.region}</p>
   <p>Country Code : ${element.altSpellings[0]}</p>
   <button class = "btn btn-primary" onclick = "weatherInfo(${element.latlng[0]},${element.latlng[1]})">Click For Weather</button>`;

   
   card.appendChild(cardBody);
   cards.appendChild(card);
  });
  
}).catch((error)=>{
  console.log(error);
});

function weatherInfo(lat,lng){
  const apiKey = "0dafeff9e1bc31ab1c2c5286435e2050";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  fetch(apiUrl).then((response)=>response.json()).then((weatherData)=>{
    
    alert(`Current Weather : ${weatherData.weather[0].main} and ${weatherData.weather[0].description} and Temperature Is ${Math.ceil(weatherData.main.temp - 273.15)} degree celsius`)
  }).catch((error)=>{
    console.log(error);
  });
}







