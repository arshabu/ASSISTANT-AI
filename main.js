const { app, BrowserWindow } =
require("electron");

let win;

function createWindow(){

  win = new BrowserWindow({

    width: 1200,
    height: 800,

    autoHideMenuBar: true,

    webPreferences: {

      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("voice.html");
}

app.whenReady().then(() => {

  createWindow();
});