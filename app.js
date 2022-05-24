const form = document.querySelector('.form')
const input = document.querySelector('.input')
const selectRegion = document.querySelector('#select-region')

movies.forEach((movie) =>{
    const div = document.createElement('div')
    div.classList.add('card')
    div.setAttribute('id', `${movie.title}`)
    div.setAttribute('data-set', `${movie.categories[0]}`)
    div.setAttribute('style', "width: 17rem;")
    div.innerHTML = `
        <img src=${movie.smallPoster} class="card-img-top" alt"...">
        <div class="card-body">
         <h5 class="card-title">${movie.title}</h5>
         <p class="card-text"> ${movie.summary.substr(0, 50)}</p>
        <div class="block-raiting">
         <img class="img" src="./1289679474.svg" alt="">
         <h3 class="card-raiting">  ${movie.imdbRating}</h3>
         </div>
         <h4 class='card-year'> Year: ${movie.year}</h4>
         <a class="btn btn-primary" href="https://youtube.com/watch?v=4hZi5QaMBFc">Read More</a> 
         
         </div>
         `
         document.querySelector('.movies-div').appendChild(div)
         
})

form.addEventListener('input', (e) => {
    e.preventDefault()
    const moviesDiv = document.querySelector('.movies-div').childNodes
   
    moviesDiv.forEach((div) =>{
        const check = div.getAttribute('id').toLowerCase().includes(input.value.toLowerCase())
        // console.log(check)

        if(check){
            div.style.display = "block"
        }else{
            div.style.display = 'none'
        }
    })

})

selectRegion.addEventListener('change', () => {
    const moviesDiv = document.querySelector('.movies-div').childNodes

    moviesDiv.forEach((div) => {
        const check = div.getAttribute('data-set').toLowerCase().includes(selectRegion.value.toLowerCase())
    
        if (check) {
            div.style.display = 'block'
        } else {
            div.style.display = 'none'
        }

        if (selectRegion.value == 'categories') {
            div.style.display = 'block'
        }
    })
})