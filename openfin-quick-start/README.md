# openfin-quick-start

**Clone and run for a quick way to see memory usage of Openfin Child Windows**

This is a minimal Openfin application based on the [Quick Start Guide](https://openfin.co/tutorial-directory/).

A basic Openfin application needs just these files:

- `app.json` - Configuration for launching your openfin app that is used by [openfin-cli](https://github.com/openfin/openfin-cli)
- `index.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render for the parent window.
- `child.html` - A web page for child windows to render (and avoid having the script for the parent application being re-executed).
- `package.json` - Not necessary. Simply used to facilitate quick launch

## To Use

```bash
# Clone this repository
git clone https://github.com/openfin/openfin-memory-profiling
# Go into the repository
cd openfin-quick-start
# Install dependencies
npm install
# Run the app
npm start 
```

## View Resouce usage

Launch your OS's resource viewer. For windows we recommend [process explorer](https://technet.microsoft.com/en-us/sysinternals/processexplorer.aspx)