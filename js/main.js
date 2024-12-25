const inputSearch =document.querySelector("#inputSearch")
inputSearch.addEventListener("input",function(e){
  getWeather(e.target.value)
})

const apiKey=`186f8eb3c1b54f969bc220129242212`;
async function getWeather(city='Alexandria'){
    try {
        let response= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=186f8eb3c1b54f969bc220129242212&q=${city}&days=3`)

       data = await response.json();
       displayWeather(data)
    } catch (error) {
        console.log(error)
    }  
}
getWeather()
function displayWeather(data){
  console.log(data)
  let array = data.forecast.forecastday;
  // console.log(array)
    let cartona = ``;
    for(let i=0 ; i<array.length;i++){
    const dayDetail =  weatherday(array[i].date);
    // console.log(dayDetail);
        cartona+=`
        <div class="col-lg-3 p-0">
                <div class="weather-tabel">
                  <div class="header-group d-flex justify-content-center w-100">
                  ${i===0 ? `  
                       <div class="d-flex justify-content-between w-100">
                        <div class="firstDay ps-3 ">${dayDetail.day}</div>
                    <div class="fiestDate pe-2">${dayDetail.dayNumber} ${dayDetail.month}</div>
                       </div>  
                    
                    
                    ` : `
                      <div class="firstDay ps-3 ">${dayDetail.day}</div>
                    `}
                   
                       </div>
        <div class="body-group first-day p-4">
        ${i===0 ? `
          <div class="location fs-4 me-3">
          ${data.location.name}
          </div>
          
          ` : ``}
            ${i==0 ? `
         <div class="degree-content">
       
           <div class="digit d-flex ">
${data.current.temp_c}
          
             &deg;C

        
          </div>
            <div class="degree-ico">
            <img src="${data.current.condition.icon}" alt="">
          </div>
         </div>
          
          
          `: `
           <div class="degree-content d-flex flex-column justify-content-center align-items-center">
           <div class="  ">
            <div class="degree-ico text-center mb-4">
            <img src="${array[i].day.condition.icon}" alt="">
          </div>
        
           <div class=" d-flex flex-column justify-content-center align-items-center ">
<p class="DayDegree">${array[i].day.maxtemp_c}  &deg;C</p>
<p class="temp">${array[i].day.mintemp_c}  &deg;</p>  
          </div>
            
           </div>
         </div>
          
          
          
          `}
         
        
         ${i===0 ? `
           <div class="custom my-4 ">
          ${data.current.condition.text}
           </div>
          ` : `
           <div class="custom my-4 text-center">
          ${array[i].day.condition.text}
             </div>
          `}
         
      ${i==0 ? `
        
        <div class="group-icon d-flex gap-4">
          <spand class="d-flex  gap-2 align-items-center"  >
            <img src="img/icon-umberella.png" alt="">
      ${data.current.humidity}%
          </spand>
          <span class="d-flex  gap-2 align-items-center"> 
            <img src="img/icon-wind.png" alt="">
      ${data.current.wind_kph}km/hr
          </span>
          <span class="d-flex justify-content-between gap-2 align-items-center">
            <img src="img/icon-compass.png" alt="">
           ${data.current.wind_dir}
          </span>
         </div>
        
        
        ` : ``}
         
          
        </div>
                  </div>
                </div>




        `

        
        
    
    }  
    document.querySelector("#getWeather").innerHTML=cartona
  }

  function weatherday(dates){
    // console.log(dates)
const dateDetails = new Date(dates);
const day = dateDetails.toLocaleString("en-US",{weekday :"long"})
const month = dateDetails.toLocaleString("en-US",{month :"long"})
const dayNumber = dateDetails.toLocaleString("en-US",{day :"2-digit"})
// console.log(day);
// console.log(month);
// console.log(dayNumber);
// console.log(day)
return {day , dayNumber , month};
  }


  