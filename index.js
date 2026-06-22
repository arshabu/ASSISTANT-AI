const readline = require("readline");
const { exec } = require("child_process");
const say = require("say");
const os = require("os");
const si = require("systeminformation");
const screenshot = require("screenshot-desktop");
const ollama = require("ollama");

/* 🔥 TERMINAL INPUT */

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* 🧠 MEMORY */

let userName = "";

/* 🌅 GREETING */

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){
  greeting = "Good Morning";
}
else if(hour < 18){
  greeting = "Good Afternoon";
}
else{
  greeting = "Good Evening";
}

console.log("🔥 FEBIAN AI STARTED 🔥");

speak(`${greeting} boss. FEBIAN is online`);

/* 🔊 SPEAK FUNCTION */

function speak(text){

  say.stop();

  say.speak(text);
}

/* 🚀 OPEN APP FUNCTION */

function openApp(command, response){

  exec(command);

  speak(response);

  console.log(`FEBIAN: ${response} 🚀`);
}

/* 🧠 AI CHAT */

async function askAI(prompt){

  try{

    const response = await ollama.chat({

      model: "tinyllama",

      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const reply =
    response.message.content;

    console.log(`FEBIAN AI: ${reply}`);

    speak(reply);
  }

  catch(error){

    console.log("AI Error:", error.message);

    speak("AI system failed");
  }
}

/* 🚀 MAIN SYSTEM */

function startFEBIAN(){

  rl.question("You: ", async (command) => {

    command = command.trim().toLowerCase();

    /* 👋 HELLO */

    if(command.includes("hello")){

      speak(`Hello ${userName || "boss"}`);

      console.log("FEBIAN: Hello boss 🔥");
    }

    /* 🌐 OPEN APPS */

    else if(command === "open chrome"){

      openApp("start chrome", "Opening Chrome");
    }

    else if(command === "open youtube"){

      openApp(
        "start https://youtube.com",
        "Opening YouTube"
      );
    }

    else if(command === "open google"){

      openApp(
        "start https://google.com",
        "Opening Google"
      );
    }

    else if(command === "open instagram"){

      openApp(
        "start https://instagram.com",
        "Opening Instagram"
      );
    }

    else if(command === "open github"){

      openApp(
        "start https://github.com",
        "Opening GitHub"
      );
    }

    else if(command === "open vscode"){

      openApp("code", "Opening VS Code");
    }

    else if(command === "open calculator"){

      openApp("calc", "Opening Calculator");
    }

    else if(command === "open notepad"){

      openApp("notepad", "Opening Notepad");
    }

    else if(command === "open file explorer"){

      openApp("explorer", "Opening File Explorer");
    }

    else if(command === "open settings"){

      openApp(
        "start ms-settings:",
        "Opening Settings"
      );
    }

    else if(command === "open edge"){

      openApp("start msedge", "Opening Edge");
    }

    else if(command === "open this pc"){

      openApp(
        "explorer shell:MyComputerFolder",
        "Opening This PC"
      );
    }

    /* ⏰ DATE + TIME */

    else if(command === "date"){

      const date =
      new Date().toDateString();

      speak(date);

      console.log("FEBIAN:", date);
    }

    else if(command === "time"){

      const time =
      new Date().toLocaleTimeString();

      speak(`The time is ${time}`);

      console.log("FEBIAN:", time);
    }

    /* 💻 SYSTEM INFO */

    else if(command === "system info"){

      console.log("System:", os.hostname());

      console.log("Platform:", os.platform());

      console.log(
        "RAM:",
        (
          os.totalmem() /
          1024 /
          1024 /
          1024
        ).toFixed(2),
        "GB"
      );

      console.log(
        "Free RAM:",
        (
          os.freemem() /
          1024 /
          1024 /
          1024
        ).toFixed(2),
        "GB"
      );

      speak("Showing system information");
    }

    /* 🔋 BATTERY */

    else if(command === "battery status"){

      const data =
      await si.battery();

      const battery =
      `Battery is ${data.percent} percent`;

      speak(battery);

      console.log("FEBIAN:", battery);
    }

    /* 🌐 SEARCH */

    else if(command.startsWith("search ")){

      const search =
      command.replace("search ", "");

      exec(
        `start https://www.google.com/search?q=${search}`
      );

      speak(`Searching ${search}`);

      console.log(
        `FEBIAN: Searching ${search} 🔍`
      );
    }

    /* 🌍 OPEN ANY WEBSITE */

    else if(command.startsWith("open ")){

      const site =
      command.replace("open ", "");

      exec(`start https://${site}.com`);

      speak(`Opening ${site}`);

      console.log(
        `FEBIAN: Opening ${site} 🚀`
      );
    }

    /* 🎵 MUSIC */

    else if(command === "play music"){

      exec("start wmplayer");

      speak("Playing music");

      console.log(
        "FEBIAN: Playing music 🎵"
      );
    }

    /* 📶 WIFI */

    else if(command === "wifi status"){

      exec(
        "netsh wlan show interfaces",
        (err, stdout) => {

          console.log(stdout);

          speak("Showing wifi status");
        }
      );
    }

    /* 📸 SCREENSHOT */

    else if(command === "take screenshot"){

      await screenshot({

        filename: "screenshot.png"
      });

      speak("Screenshot captured");

      console.log(
        "FEBIAN: Screenshot saved 📸"
      );
    }

    /* 😎 GREETINGS */

    else if(command === "good morning"){

      speak("Good morning boss");

      console.log(
        "FEBIAN: Good morning boss ☀️"
      );
    }

    else if(command === "good night"){

      speak("Good night boss");

      console.log(
        "FEBIAN: Good night boss 🌙"
      );
    }

    else if(command === "thank you"){

      speak("Always welcome boss");

      console.log(
        "FEBIAN: Always welcome boss 😎"
      );
    }

    else if(command === "how are you"){

      speak(
        "I am functioning perfectly boss"
      );

      console.log(
        "FEBIAN: I am functioning perfectly 😎"
      );
    }

    /* 😂 JOKE */

    else if(command === "tell me a joke"){

      const joke =
      "Why do programmers hate nature? Too many bugs";

      speak(joke);

      console.log("FEBIAN:", joke);
    }

    /* 🔥 MOTIVATION */

    else if(command === "motivate me"){

      const quotes = [

        "Success starts with discipline",

        "Keep pushing forward boss",

        "Dream big and work hard",

        "You can build anything with coding",

        "Never stop learning"
      ];

      const random =
      quotes[
        Math.floor(
          Math.random() * quotes.length
        )
      ];

      speak(random);

      console.log("FEBIAN:", random);
    }

    /* 🧠 MEMORY */

    else if(command.startsWith("my name is ")){

      userName =
      command
      .replace("my name is ", "")
      .trim();

      speak(
        `Nice to meet you ${userName}`
      );

      console.log(
        `FEBIAN: Nice to meet you ${userName} 😎`
      );
    }

    else if(command === "what is my name"){

      if(userName){

        speak(
          `Your name is ${userName}`
        );

        console.log(
          `FEBIAN: Your name is ${userName}`
        );
      }

      else{

        speak(
          "I don't know your name yet"
        );

        console.log(
          "FEBIAN: I don't know your name yet ❌"
        );
      }
    }

    else if(command === "who am i"){

      if(userName){

        speak(
          `You are ${userName}, my boss`
        );

        console.log(
          `FEBIAN: You are ${userName}`
        );
      }

      else{

        speak(
          "I don't know who you are yet"
        );

        console.log(
          "FEBIAN: I don't know who you are ❌"
        );
      }
    }

    /* 🤖 AI */

    else if(command === "who are you"){

      speak(
        "I am FEBIAN, your personal AI assistant"
      );

      console.log(
        "FEBIAN: I am your AI assistant 😎"
      );
    }

    /* 🔒 LOCK PC */

    else if(command === "lock pc"){

      exec(
        "rundll32.exe user32.dll,LockWorkStation"
      );

      speak("Locking computer");
    }

    /* 🔄 RESTART */

    else if(command === "restart pc"){

      speak("Restarting computer");

      exec("shutdown /r /t 5");
    }

    /* 📴 SHUTDOWN */

    else if(command === "shutdown pc"){

      speak("Shutting down computer");

      exec("shutdown /s /t 5");
    }

    /* ❓ HELP */

    else if(command === "help"){

      console.log(`

========== FEBIAN COMMANDS ==========

hello
time
date
battery status
system info
wifi status
take screenshot

open chrome
open youtube
open google
open instagram
open github
open vscode
open calculator
open notepad
open settings
open this pc

search ...

play music

tell me a joke
motivate me

my name is ...
what is my name
who am i

shutdown pc
restart pc
lock pc

help
exit

=====================================

`);

      speak("Showing all commands");
    }

    /* ❌ EXIT */

    else if(command === "exit"){

      speak("Goodbye boss");

      console.log(
        "FEBIAN: Goodbye boss 😴"
      );

      rl.close();

      return;
    }

    /* 🧠 AI FALLBACK */

    else{

      await askAI(command);
    }

    startFEBIAN();
  });
}

/* 🚀 START */

startFEBIAN();