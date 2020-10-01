'use strict'
const moviesNames = ['The Pursuit of Happyness','Saving Private Ryan','A Beautiful Mind']
const apiKey = '5807efb1';
const select = document.getElementById('select')
const result = document.getElementById('result') 

// 
function injectData(){
    moviesNames.forEach(movieName =>{
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
        fetch(url)
        .then(res => res.json())
        .then(res =>{
            const option = document.createElement('option')
            option.value = res.Title 
            option.textContent = res.Title
            select.appendChild(option)
        })
       
    })  
}

function showData(e){
    result.textContent = "";
    const movieTitle = e.target.value;
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`
        fetch(url)
        .then(res => res.json())
        .then(res =>{
            const title = document.createElement('h4')
            const poster = document.createElement('img')
            const plot = document.createElement('p')
            // 
            title.textContent = res.Title
            poster.src = res.Poster
            plot.textContent = res.Plot
            // appending
            result.appendChild(title)
            result.appendChild(poster)
            result.appendChild(plot)
            // 
            console.log(res)
        })
       
}
window.addEventListener('load',injectData)
select.addEventListener('change',showData)

