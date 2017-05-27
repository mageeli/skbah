function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

checkConnection();
document.addEventListener("offline", onOffline, false);


document.addEventListener("deviceready", inAppBrowserAPI, false);
document.addEventListener("online", onOnline, false);


function inAppBrowserAPI() {
    var optionArr = [
        'location=no',
        'hidden=yes',
        'clearcache=no',
        'clearsessioncache=no',
        'transitionstyle=fliphrizontal',
        'toolbar=no',
        'closebuttoncaption=Exit',
        'toolbarposition=top',
        'disallowoverscroll=yes',
        'enableViewportScale=yes',
        'mediaPlaybackRequireUserAction=yes',
        'allowInlineMediaPlayback=yes',
        'keyboardDisplayRequiresUserAction=no',
        'suppressesIncrementRendering=yes',
        'presentationstle=formsheet',
        'zoom=no',
        'hardwareback=yes',
        'fullscreen=yes'
    ]

    var options = optionArr.join();

    if (navigator.connection.type == Connection.NONE) {
        navigator.notification.alert('An internet connection is required to continue');
    } else {
        var browserOptions = window.open('https://skbah.com/','_blank', options);
        browserOptions.addEventListener('loadstart', loadStartCallBack);
        browserOptions.addEventListener('loadstop', loadStopCallBack);
        browserOptions.addEventListener('loaderror', loadErrorCallBack);
        function loadStartCallBack() {

            $('#status-message').text("loading please wait ...");

        }

        function loadStopCallBack() {
            if (browserOptions != undefined) {
                browserOptions.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions.insertCSS(
                    {code: 'body #footer {display: none;}'}
                );
                browserOptions.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions.insertCSS(
                    {code: 'body  .main-slider {display: none;}'}
                );
                browserOptions.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions.insertCSS(
                    {code: '.common-home header {left: 0;position: fixed !important; right: 0; top: 0px; z-index:80; background-color: #fff; border-bottom: 1px solid #333;}'}
                );
                browserOptions.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions.insertCSS(
                    {code: '.homepage-text {margin-top: 100px;}'}
                );
                browserOptions.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions.insertCSS(
                    {code: '.content-top-breadcum {height: 200px !important;}'}
                );
                browserOptions.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions.insertCSS(
                    {code: 'header {left: 0;position: fixed !important; right: 0; z-index:80; background-color: #fff; border-bottom: 1px solid #333;}'}
                );
                $('#status-message').text("");
                browserOptions.show();
            }
        };
        function loadErrorCallBack() {

            function myFunction() {
                var r = confirm("لا يوجد اتصال بلانترنت هل تريد الخروج من البرنامج");
                if (r == true) {
                    navigator.app.exitApp();
                } else {
                    function onOffline() {
                        alert('لا ويجد اتصال بالانترنت');
                        browserOptions.close();
                    }
                    function onOnline() {
                        navigator.app.backHistory();
                    }
                }
            }
            var scriptErrorMesssage = myFunction();
            browserOptions.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

        }

        function executeScriptCallBack() {
            $('#status-message').text('ff');
        }
    }
}
