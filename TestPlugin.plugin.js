/**
 * @name TestPlugin
 * @author Zackbot
 * @description Try random shit out
 * @version 0.0.2
 * @authorid 449774710469689355
 * @source https://github.com/Zackbot2/TestPlugin
 */

function createButton() {

  

  const myButton = document.createElement("button");
  myButton.textContent = "CLICK FOR SEX";
  myButton.className = "sex-button"
  myButton.addEventListener("click", () => {
    window.alert("SEX");
  });
  const serverList = document.querySelector(".scroller_c1e9c4");
  serverList.append(myButton);

  BdApi.DOM.onRemoved(myButton, () => {
    serverList.append(myButton);
  });
}

module.exports = class YourPlugin {
  start() {
    // Called when the plugin is activated (including after reloads)
    BdApi.alert("Guh??", "Plugin is active");

    BdApi.DOM.addStyle( "SexButton", `.sex-button {
      padding: 10px;
      border: 4px solid black;
      background-color: gray;
      border-radius: 10px;
      font-size: 10px;
  
      width: 150px;
    }`);

    createButton();
  }

  stop() {
    //BdApi.DOM.removeStyle("SexButton")
  }
};
