const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sendCommand(cmd){

  fetch("http://localhost:3000/terminal", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({text:cmd})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log("FEBIAN EXECUTED:", data.command);
  })
  .catch(err=>{
    console.log("Server not running");
  });
}

console.log("🔥 FEBIAN TERMINAL CONTROL STARTED");

rl.on("line",(input)=>{

  sendCommand(input);
});