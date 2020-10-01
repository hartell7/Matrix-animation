let elemento = document.getElementById('matrix')
let ctx = elemento.getContext('2d')
let width = document.body.clientWidth
let height = document.body.clientHeight

elemento.width = width
elemento.height = height

let position = Array(300).join(0).split('')

function initMatrix(){
  ctx.fillStyle = "rgba(0, 5, 1, 0.3)"
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = "#00FF00"

  ctx.font = "11pt arial"

  position.map(function(y, index){
    let texto = String.fromCharCode(1e2 + Math.random() * 40)
    let x = (index * 5) + 15

    matrix.getContext('2d').fillText(texto, x, y)

    if(y > 100 + Math.random() * 1e5){
      position[index] = 0
    }else{
      position[index] = y + 15
    }
  })
}

setInterval(initMatrix, 28)