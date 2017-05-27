
document.addEventListener("deviceready", inAppBrowserAPI, false);
document.addEventListener("deviceready", inAppBrowserAPI2, false);

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
                var r = confirm("Press a button!");
                if (r == true) {
                    navigator.app.exitApp();
                } else {
                    inAppBrowserAPI2();                }
            }
            var scriptErrorMesssage = myFunction();
            browserOptions.close();
            browserOptions.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

        }

        function executeScriptCallBack() {
            browserOptions.close();
            $('#status-message').text('');
        }
    }
}

function inAppBrowserAPI2() {
    var optionArr1 = [
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

        var options1 = optionArr1.join();
        var browserOptions1 = window.open('https://skbah.com/','_blank', options1);
        browserOptions1.addEventListener('loadstart', loadStartCallBack);
        browserOptions1.addEventListener('loadstop', loadStopCallBack);
        browserOptions1.addEventListener('loaderror', loadErrorCallBack);
        function loadStartCallBack() {

            $('#status-message').text("loading please wait ...");

        }

        function loadStopCallBack() {
            if (browserOptions1 != undefined) {
                browserOptions1.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions1.insertCSS(
                    {code: 'body #footer {display: none;}'}
                );
                browserOptions1.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions1.insertCSS(
                    {code: 'body  .main-slider {display: none;}'}
                );
                browserOptions1.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions1.insertCSS(
                    {code: '.common-home header {left: 0;position: fixed !important; right: 0; top: 0px; z-index:80; background-color: #fff; border-bottom: 1px solid #333;}'}
                );
                browserOptions1.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions1.insertCSS(
                    {code: '.homepage-text {margin-top: 100px;}'}
                );
                browserOptions1.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions1.insertCSS(
                    {code: '.content-top-breadcum {height: 200px !important;}'}
                );
                browserOptions1.insertCSS(
                    {file: 'stylesheets.css'}
                );
                browserOptions1.insertCSS(
                    {code: 'header {left: 0;position: fixed !important; right: 0; z-index:80; background-color: #fff; border-bottom: 1px solid #333;}'}
                );
                $('#status-message').text("");
                browserOptions1.show();
            }
        };
        function loadErrorCallBack() {

            function myFunction() {
                var r = confirm("Press a button!");
                if (r == true) {
                    navigator.app.exitApp();
                } else {
                    inAppBrowserAPI2();
                }
            }
            var scriptErrorMesssage1 = myFunction();
            browserOptions1.close();
            browserOptions1.executeScript({ code: scriptErrorMesssage1 }, executeScriptCallBack1);

        }

        function executeScriptCallBack1() {
            browserOptions1.close();
            $('#status-message').text('');
        }
}

