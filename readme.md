# Debugging with VsCode

Before start debugging your code, first you need to create a launch configuration file which tells VsCode how to debug your application. Usually you can debug a same application by different ways, for example you could debug a NodeJS application by launching it through vscode or by attaching vscode to a running application.

### Before getting started

If you have never debugged a code in any editor before, then I recommend you reading this great article to learn more about breakpoints, vscode's debug view and other concepts: https://code.visualstudio.com/Docs/editor/debugging.

### Configuration file

The launch configuration file is named _**launch.json**_ and must be located inside your _.vscode_ folder. Take a look in the following example:

```
{
    "version": "0.2.0",
    "configurations": [
        // launch configuration 1
        {
            "name": "Launch example 1"
            //... you may add here other properies
        },

        // launch configuration 2
        {
            "name": "Launch example 2"
            //... you may add here other properies
        }
    ]
}
```

Notice you can add as many configurations as you want inside _launch.json_ and everytime you do, vscode updates its launching dropdown menu with it. Then later you can select a lauching option and press play (ctrl+F5) to run it.

### Common configurations

There are some common properties in your launch configuration that you might use for any kind of application. So you may check a few ones below:

* **name** (string) - Name of configuration. It is the same name that appears in your launch dropdown menu.
* **type** (string) - Type of configuration. When you install debugger extensions you get new types. For example the extension "Debugger for Chrome" gives you a new type named "chrome".
* **request** (string) - Can only be "launch" or "attached". "launch" means vscode launch your application before debugging. "attach" means vscode attaches to a running application.
* **preLaunchTask** (string) - Run a task of your _.vscode/task.json_ before debugging.

### Examples

Here it is some launching configurations for different applications:
 - [NodeJS application](./nodejs)
 - [Javascript for web application](./javascript)
 - [Typescript for web application](./typescript)
 - [PHP application](./php)