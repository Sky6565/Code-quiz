const scores = JSON.parse(localStorage.getItem("scores"));
const list = document.getElementById("list")
if(scores){
    for (let i = 0; i < scores.length; i++) {
        const score = scores[i];
        const li = document.createElement("li");
        li.innerHTML = score.initials + " - " + score.seconds
        list.appendChild(li);
    }
    
}

document.getElementById('clear').onclick = function(){
localStorage.removeItem("scores");
list.remove();
}

document.getElementById('back-button').onclick = function(){
    window.location.href = "./index.html";
}
