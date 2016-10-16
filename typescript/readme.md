# Debugging Javascript

## Instalation

Download this repository or clone by running the following git command:

```
git clone https://github.com/miguelcjalmeida/debug-with-vscode
```

In your terminal open the repository you have just download/clone and run the following command

```
npm install
```

Start a webserver running following two commands:

```
gulp build
gulp serve
```


Open the folder **./javascript/** as your vscode base directory.

#### Required extension

**Debugger for Chrome** is a required extension for debugging javascript in your chrome browser. So you must install it by opening your vscode extensions view (ctrl+shift+X) and choosing it. After the installation please restart your vscode.

#### Running chrome in debug mode
You must launch Chrome with remote debugging enabled in order for the extension to attach to it. Also you must access the following url: http://localhost:3001/javascript/index.html

##### Windows

Right click the Chrome shortcut, and select properties
In the "target" field, append --remote-debugging-port=9222

Or in a command prompt, execute <path to chrome>/chrome.exe --remote-debugging-port=9222
##### OS X

In a terminal, execute /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222


##### Linux

In a terminal, launch google-chrome --remote-debugging-port=9222


#### Configuring launch.json

Open your .vscode/launch.json and check its configuration:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Javascript - Attach with sourcemaps",
            "type": "chrome",
            "request": "attach",
            "port": 9222,
            "url": "http://localhost:3001/javascript/dist/index.html",
            "webRoot": "${workspaceRoot}/javascript/dist/",
            "sourceMaps": true
        }
    ]
}
```
Notice the are a few properties that must be properly set. So here it is a explanation for each one.

* **name** - Choose any name you want
* **type** - Must be "chrome"
* **request** - Must be "attach" to attach to your chrome application that is running with remote debugger.
* **port** - Set to 9222 because chrome was set up to run with this same port number.
* **url** - This is the url you use to access your page
* **webRoot** - the path to the base directory of your distribution files
* **sourceMaps** - enables vscode to look for sourcemap files in the "webRoot' directory.

#### Application Structure

Notice this application has a folder names "dist" where the build task generates the final javascript fil

#### Source maps, the catch!

If you check a sourcemap file of this application you will see a property named "sourceRoot" which is the relative path from the .map file to the original source file. So please open the file "./dist/scripts/scripts.js.map" and notice that its "sourceRoot" value is "../../" because the original source code file is two folders up.

So here we are using gulp in the build process. So you may check in gulpfile.js how the source map is generated with the proper source root.

```
gulp.task('build-javascript', ['build-javascript-html'], () => {
    return gulp.src(['./javascript/**/*.js', '!./javascript/dist'])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.', {sourceRoot: '../'})) // <---source root
        .pipe(gulp.dest('./javascript/dist/'))
})
```

#### Finally, lets run the application!

Please open the file ./scripts/script.js and insert a breakpoint in the first line. Then click in the 'play button' or press ctrl+f5 to run your debugger. A panel will show up with some controls. Press the pause button and check if its going to pause your browser.

Now you may press







