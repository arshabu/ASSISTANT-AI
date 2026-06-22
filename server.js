const express = require("express");
const { exec } = require("child_process");
const readline = require("readline");
const say = require("say");

const app = express();

app.use(express.static(__dirname));

/* 🔊 SPEAK */

function speak(text){

  console.log("🤖 FEBIAN:", text);

  say.speak(text);
}

/* 🚀 OPEN WEBSITE IN CHROME */

function openWebsite(site){

  let url = site;

  if(
    !site.startsWith("http")
  ){

    url = `https://${site}`;
  }

  exec(`start chrome "${url}"`);
}

/* 🚀 MAIN COMMAND FUNCTION */

function runCommand(command){

  command =
  command.toLowerCase().trim();

  console.log(
    "\n🎤 COMMAND:",
    command
  );

  /* 🌐 WEBSITES */

  if(command.includes("open youtube")){

    openWebsite("https://youtube.com");

    speak("Opening YouTube");

    return;
  }

  if(command.includes("open google")){

    openWebsite("https://google.com");

    speak("Opening Google");

    return;
  }

  if(command.includes("open instagram")){

    openWebsite("https://instagram.com");

    speak("Opening Instagram");

    return;
  }

  if(command.includes("open facebook")){

    openWebsite("https://facebook.com");

    speak("Opening Facebook");

    return;
  }

  if(command.includes("open chatgpt")){

    openWebsite("https://chat.openai.com");

    speak("Opening Chat GPT");

    return;
  }

  if(command.includes("open github")){

    openWebsite("https://github.com");

    speak("Opening GitHub");

    return;
  }

  /* 🌍 OPEN ANY WEBSITE */

  if(command.startsWith("open ")){

    const site =
    command.replace("open ", "").trim();

    /* 💻 WINDOWS APPS */

    if(site === "settings"){

      exec("start ms-settings:");

      speak("Opening Settings");

      return;
    }

    if(site === "calculator"){

      exec("calc");

      speak("Opening Calculator");

      return;
    }

    if(site === "notepad"){

      exec("notepad");

      speak("Opening Notepad");

      return;
    }

    if(site === "paint"){

      exec("mspaint");

      speak("Opening Paint");

      return;
    }

    if(site === "cmd"){

      exec("start cmd");

      speak("Opening Command Prompt");

      return;
    }

    if(site === "chrome"){

      exec("start chrome");

      speak("Opening Chrome");

      return;
    }

    if(site === "edge"){

      exec("start msedge");

      speak("Opening Edge");

      return;
    }

    if(site === "task manager"){

      exec("start taskmgr");

      speak("Opening Task Manager");

      return;
    }

    if(site === "control panel"){

      exec("control");

      speak("Opening Control Panel");

      return;
    }

    if(site === "file explorer"){

      exec("explorer");

      speak("Opening File Explorer");

      return;
    }

    if(site === "camera"){

      exec("start microsoft.windows.camera:");

      speak("Opening Camera");

      return;
    }

    if(site === "downloads"){

      exec(`explorer "${process.env.USERPROFILE}\\Downloads"`);

      speak("Opening Downloads");

      return;
    }

    if(site === "desktop"){

      exec(`explorer "${process.env.USERPROFILE}\\Desktop"`);

      speak("Opening Desktop");

      return;
    }

    if(site === "documents"){

      exec(`explorer "${process.env.USERPROFILE}\\Documents"`);

      speak("Opening Documents");

      return;
    }

    /* 🌐 OPEN AS WEBSITE */

    openWebsite(site + ".com");

    speak(`Opening ${site}`);

    return;
  }

  /* 🔎 SEARCH */

  if(command.startsWith("search ")){

    const search =
    command.replace("search ", "");

    openWebsite(
      `https://www.google.com/search?q=${search}`
    );

    speak(`Searching ${search}`);

    return;
  }

  /* ⏰ TIME */

  if(command.includes("time")){

    const time =
    new Date().toLocaleTimeString();

    speak(`Time is ${time}`);

    return;
  }

  /* 🔒 LOCK */

  if(command.includes("lock pc")){

    exec(
      "rundll32.exe user32.dll,LockWorkStation"
    );

    speak("Locking PC");

    return;
  }

  /* 🔄 RESTART */

  if(command.includes("restart pc")){

    speak("Restarting PC");

    exec("shutdown /r /t 5");

    return;
  }

  /* ⛔ SHUTDOWN */

  if(command.includes("shutdown pc")){

    speak("Shutting down PC");

    exec("shutdown /s /t 5");

    return;
  }

  /* ❌ UNKNOWN */

  speak("Command not found");
}

/* 🌐 API */

app.get("/command", (req, res) => {

  const command =
  req.query.text;

  runCommand(command);

  res.send("DONE");
});

/* 🚀 SERVER */

app.listen(3000, () => {

  console.log(
    "\n🔥 FEBIAN SERVER STARTED"
  );

  console.log(
    "🌐 http://localhost:3000"
  );
});

/* 💻 TERMINAL COMMAND MODE */

const rl =
readline.createInterface({

  input: process.stdin,

  output: process.stdout
});

console.log(
  "\n💻 TERMINAL MODE ACTIVATED"
);

console.log(
  "Type commands below...\n"
);

rl.on("line", (input) => {

  runCommand(input);
});