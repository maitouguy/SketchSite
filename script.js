const container = document.querySelector('.container')
DrawGrid()
document.querySelector('#eraser').addEventListener("click",()=>{DrawGrid()})
function DrawGrid(){
    let resolution = prompt('write the resolution you want for your sketch')
    if(resolution > 100){
        return;
    }
    container.innerHTML = ''
    for(let i = 0;i<resolution*resolution; i++){
    let pixel = document.createElement('div');
    pixel.setAttribute("style",
    `
        width : ${700/resolution}px;
        height : ${700/resolution}px;
        
    `)
    pixel.classList.add("pixel")
    container.append(pixel)
    }
}
container.addEventListener("click",function(e){
    if(e.target.classList.contains("pixel")){
        e.target.classList("nigga")
    }
})