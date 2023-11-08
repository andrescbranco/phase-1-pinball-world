let index = null

fetch('http://localhost:3000/games')
.then((res)=>res.json())
.then((data)=>{
    handleDetail(data[0])
    handleForm(data)
    for(let game of data){
        handleGames(game)
    }
})


function handleGames (game) {
    let h5 = document.createElement('h5')
    let gameList = document.querySelector('.game-list')
    h5.textContent = `${game.name} (${game.manufacturer_name})`
    gameList.append(h5)

    h5.addEventListener('click', ()=>{
        handleDetail(game)
        identifier(game)
    })
}

function handleDetail(game){
    let image = document.querySelector('#detail-image')
    let name = document.querySelector('#detail-title')
    let highScore = document.querySelector('#detail-high-score')

    image.src = game.image
    name.textContent = game.name
    highScore.textContent = game.high_score

}

function handleForm(data){
    let form = document.querySelector('#high-score-form')
    let highScore = document.querySelector('#detail-high-score')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        highScore.textContent = form.querySelector('#score-input').value
        data[index].high_score = (highScore.textContent)*1

    })
}

function identifier(game){
    let id = game.id
    index = id - 1
    return index
}