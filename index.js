const All=[{quest:"1234"},{quest:"5678"},{quest:"5678"},{quest:"5678"}]
debugger

const renderAll=()=>{
    createScreen();
    All.forEach(ele => {
        // createScreen(ele);
        createQ();
        createA();
        // createSpan();
      }); 
}




const createScreen=()=>{
  const div=document.createElement("div");
  div.setAttribute("class", "screen");
  div.setAttribute("id", "screen")
  main.appendChild(div);
//   createQ();
//   createA();
  
}

const createQ=()=>{
    const Q=document.createElement("div")
    Q.setAttribute("class", "block");
    Q.setAttribute("id", "")
    // Q.innerText= ele.quest
    document.getElementById("screen").appendChild(Q);
}

const createA=()=>{
    const A=document.createElement("div")
    A.setAttribute("class", "block");
    A.setAttribute("id", "")
    // A.innerText= ele.quest
    document.getElementById("screen").appendChild(A);
}




// const createSpan=()=>{
// const span=document.createElement("span");
// span.innerText = ele.quest;
// span.setAttribute("class", classN);
// return parent.appendChild(span);

// }
const createInput=()=>{
    Input.innerHTML=""
}

// renderAll();