// let addNote = document.getElementById("addNote");
// let deleteIcon = document.querySelector(".icons");
// let addBtn = document.getElementById("addBtn");


// addNote.addEventListener("click", function(){
//     document.querySelector(".addForm").style.display="block"
//     document.getElementById("tittle").value="";
//     document.getElementById("description").value=""
// })

// deleteIcon.addEventListener("click", function(){
//     document.querySelector(".addForm").style.display="none"
// })

// addBtn.addEventListener("click", function(){


//     document.querySelector(".addForm").style.display="none"


//     let div = document.createElement("div");
//     div.classList.add("myNotes");
//     div.innerHTML=`
//     <h2>${document.getElementById("tittle").value}</h2>
//     <p>${document.getElementById("description").value}</p>
//     <button>Delete</button>
//     `
//     div.querySelector("button").addEventListener("click",function(){
//         div.remove();
//     })
//     document.querySelector(".newNotes").appendChild(div)
// })
let addNote = document.getElementById("addNote");
let deleteIcon = document.querySelector(".icon");
let addBtn = document.getElementById("addBtn");



addNote.addEventListener("click", function(){
    document.querySelector(".addForm").style.display="block"
    document.getElementById("tittle").value="";
    document.getElementById("description").value="";

})


deleteIcon.addEventListener("click", function(){
    document.querySelector(".addForm").style.display="none"
})


addBtn.addEventListener("click", function(){

    document.querySelector(".addForm").style.display="none"

    let div = document.createElement("div");
    div.classList.add("myNote");
    div.innerHTML=`
    <h2>${document.getElementById("tittle").value}</h2>
    <p>${document.getElementById("description").value}</p>
    <button>Delete</button>
    `
    div.querySelector("button").addEventListener("click", function(){
        div.remove();
    })
    document.querySelector(".newNotes").appendChild(div)
})