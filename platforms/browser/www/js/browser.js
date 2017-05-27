document.addEventListener("deviceready", inAppBrowserAPI, false);


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

            SpinnerDialog.show();

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
                SpinnerDialog.hide();
            }
        };
        function loadErrorCallBack() {

            var scriptErrorMesssage = "alert('Sorry we cannot open that page. Message from the server is');";
            browserOptions.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

            browserOptions.close();

            browserOptions = undefined;
        }

        function executeScriptCallBack() {
            $('#status-message').text('ff');
            navigator.app.exitApp();
        }
    }
}
