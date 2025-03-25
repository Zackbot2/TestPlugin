/**
 * @name TestPlugin
 * @author Zackbot
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

module.exports = class YourPlugin {
    start() {
      // Called when the plugin is activated (including after reloads)
      BdApi.alert("Hello World", "Plugin is active");
    } 

    stop() {
      // Called when the plugin is deactivated
    }
}