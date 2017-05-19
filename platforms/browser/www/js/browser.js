

document.addEventListener("deviceready", inAppBrowserAPI, false);

function inAppBrowserAPI() {
    var optionArr = [
        'location=no',
        'hidden=yes',
        'clearcache=yes',
        'clearsessioncache=yes',
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
        browserOptions.addEventListener('loadstop', function () {
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
                {code: 'body   {background: #333;}'}
            );
            browserOptions.show();
        });

    }
}