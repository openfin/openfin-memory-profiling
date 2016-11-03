document.addEventListener("DOMContentLoaded", function(){
    init();
});




function init(){
    /* Code common to both OpenFin and browser to go above.
     Then the specific code for OpenFin and browser only to be
     targeted in the try/catch block below.
     */
    try{
        fin.desktop.main(function(){
            initWithOpenFin();
        })
    }catch(err){
        initNoOpenFin();
    }
};

var numWins = 10;
var windows = [];

function createWindows () {
  for (var i = 0; i < numWins; i++){
    var _window = new fin.desktop.Window(
        {
            name: "win" + Date.now(),
            url: "http://localhost:8080/child.html",
            //url: "https://twitter.com/",
            defaultWidth: 800,
            defaultHeight: 600,
            autoShow: true
        },
        function(){
            console.log("Successfully Created Window");
        },
        function(){
            console.log("Window creation failed");
        }
    );
    windows.push(_window);
  }
}

function initWithOpenFin(){
    // Your OpenFin specific code to go here...
    //OpenFin is ready
    fin.desktop.main(function() {
        //Update the status Indicator.

        createWindows();
        
        document.querySelector('#status-indicator').classList.toggle("online");

        //get the current version.
        fin.desktop.System.getVersion(function(version) {
            document.querySelector('#of-version').innerText = version;
        });
    });
}

function initNoOpenFin(){
    alert("OpenFin is not available - you are probably running in a browser.");
    // Your browser-only specific code to go here...
}
