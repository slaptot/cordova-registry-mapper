var map = {
    'org.apache.cordova.battery-status':'cordova-plugin-battery-status',
    'org.apache.cordova.camera':'cordova-plugin-camera',
    'org.apache.cordova.console':'cordova-plugin-console',
    'org.apache.cordova.contacts':'cordova-plugin-contacts',
    'org.apache.cordova.device':'cordova-plugin-device',
    'org.apache.cordova.device-motion':'cordova-plugin-device-motion',
    'org.apache.cordova.device-orientation':'cordova-plugin-device-orientation',
    'org.apache.cordova.dialogs':'cordova-plugin-dialogs',
    'org.apache.cordova.file':'cordova-plugin-file',
    'org.apache.cordova.file-transfer':'cordova-plugin-file-transfer',
    'org.apache.cordova.geolocation':'cordova-plugin-geolocation',
    'org.apache.cordova.globalization':'cordova-plugin-globalization',
    'org.apache.cordova.inappbrowser':'cordova-plugin-inappbrowser',
    'org.apache.cordova.media':'cordova-plugin-media',
    'org.apache.cordova.media-capture':'cordova-plugin-media-capture',
    'org.apache.cordova.network-information':'cordova-plugin-network-information',
    'org.apache.cordova.splashscreen':'cordova-plugin-splashscreen',
    'org.apache.cordova.statusbar':'cordova-plugin-statusbar',
    'org.apache.cordova.vibration':'cordova-plugin-vibration',
    'org.apache.cordova.test-framework':'cordova-plugin-test-framework',
    'com.msopentech.websql' : 'cordova-plugin-websql',
    'com.msopentech.indexeddb' : 'cordova-plugin-indexeddb',
    'com.microsoft.aad.adal' : 'cordova-plugin-ms-adal',
    'com.microsoft.capptain' : 'capptain-cordova',
    'com.microsoft.services.aadgraph' : 'cordova-plugin-ms-aad-graph',
    'com.microsoft.services.files' : 'cordova-plugin-ms-files',
    'om.microsoft.services.outlook' : 'cordova-plugin-ms-outlook',
    'com.pbakondy.sim' : 'cordova-plugin-sim',
    'android.support.v4' : 'cordova-plugin-android-support-v4',
    'android.support.v7-appcompat' : 'cordova-plugin-android-support-v7-appcompat',
    'com.google.playservices' : 'cordova-plugin-googleplayservices',
    'com.google.cordova.admob' : 'cordova-plugin-admobpro',
    'com.rjfun.cordova.extension' : 'cordova-plugin-extension',
    'com.rjfun.cordova.plugin.admob' : 'cordova-plugin-admob',
    'com.rjfun.cordova.flurryads' : 'cordova-plugin-flurry',
    'com.rjfun.cordova.facebookads' : 'cordova-plugin-facebookads',
    'com.rjfun.cordova.httpd' : 'cordova-plugin-httpd',
    'com.rjfun.cordova.iad' : 'cordova-plugin-iad',
    'com.rjfun.cordova.iflyspeech' : 'cordova-plugin-iflyspeech',
    'com.rjfun.cordova.lianlianpay' : 'cordova-plugin-lianlianpay',
    'com.rjfun.cordova.mobfox' : 'cordova-plugin-mobfox',
    'com.rjfun.cordova.mopub' : 'cordova-plugin-mopub',
    'com.rjfun.cordova.mmedia' : 'cordova-plugin-mmedia',
    'com.rjfun.cordova.nativeaudio' : 'cordova-plugin-nativeaudio',
    'com.rjfun.cordova.plugin.paypalmpl' : 'cordova-plugin-paypalmpl',
    'com.rjfun.cordova.smartadserver' : 'cordova-plugin-smartadserver',
    'com.rjfun.cordova.sms' : 'cordova-plugin-sms',
    'com.rjfun.cordova.wifi' : 'cordova-plugin-wifi',
    'com.ohh2ahh.plugins.appavailability' : 'cordova-plugin-appavailability',
    'org.adapt-it.cordova.fonts' : 'cordova-plugin-fonts',
    'de.martinreinhardt.cordova.plugins.barcodeScanner' : 'cordova-plugin-barcodescanner',
    'de.martinreinhardt.cordova.plugins.urlhandler' : 'cordova-plugin-urlhandler',
    'de.martinreinhardt.cordova.plugins.email' : 'cordova-plugin-email',
    'de.martinreinhardt.cordova.plugins.certificates' : 'cordova-plugin-certificates',
    'de.martinreinhardt.cordova.plugins.sqlite' : 'cordova-plugin-sqlite',
    'fr.smile.cordova.fileopener' : 'cordova-plugin-fileopener',
    'org.smile.websqldatabase.initializer' : 'cordova-plugin-websqldatabase-initializer',
    'org.smile.websqldatabase.wpdb' : 'cordova-plugin-websqldatabase',
    'org.jboss.aerogear.cordova.push' : 'aerogear-cordova-push',
    'org.jboss.aerogear.cordova.oauth2' : 'aerogear-cordova-oauth2',
    'org.jboss.aerogear.cordova.geo' : 'aerogear-cordova-geo',
    'org.jboss.aerogear.cordova.crypto' : 'aerogear-cordova-crypto',
    'org.jboss.aerogaer.cordova.otp' : 'aerogear-cordova-otp',
    'uk.co.ilee.applewatch' : 'cordova-plugin-apple-watch',
    'uk.co.ilee.directions' : 'cordova-plugin-directions',
    'uk.co.ilee.gamecenter' : 'cordova-plugin-game-center',
    'uk.co.ilee.jailbreakdetection' : 'cordova-plugin-jailbreak-detection',
    'uk.co.ilee.nativetransitions' : 'cordova-plugin-native-transitions',
    'uk.co.ilee.pedometer' : 'cordova-plugin-pedometer',
    'uk.co.ilee.shake' : 'cordova-plugin-shake',
    'uk.co.ilee.touchid' : 'cordova-plugin-touchid',
    'com.knowledgecode.cordova.websocket' : 'cordova-plugin-websocket',
    'com.elixel.plugins.settings' : 'cordova-plugin-settings',
    'com.cowbell.cordova.geofence' : 'cordova-plugin-geofence',
    'com.blackberry.community.preventsleep' : 'cordova-plugin-preventsleep',
    'com.blackberry.community.gamepad' : 'cordova-plugin-gamepad',
    'com.blackberry.community.led' : 'cordova-plugin-led',
    'com.blackberry.community.thumbnail' : 'cordova-plugin-thumbnail',
    'com.blackberry.community.mediakeys' : 'cordova-plugin-mediakeys',
    'com.blackberry.community.simplebtlehrplugin' : 'cordova-plugin-bluetoothheartmonitor',
    'com.blackberry.community.simplebeaconplugin' : 'cordova-plugin-bluetoothibeacon',
    'com.blackberry.community.simplebtsppplugin' : 'cordova-plugin-bluetoothspp',
    'com.blackberry.community.clipboard' : 'cordova-plugin-clipboard',
    'com.blackberry.community.curl' : 'cordova-plugin-curl',
    'com.blackberry.community.qt' : 'cordova-plugin-qtbridge',
    'com.blackberry.community.upnp' : 'cordova-plugin-upnp',
    'net.yoik.cordova.plugins.screenorientation' : 'cordova-plugin-screen-orientation',
    'com.phonegap.plugins.barcodescanner' : 'phonegap-plugin-barcodescanner',
    'com.manifoldjs.hostedwebapp' : 'cordova-plugin-hostedwebapp',
    'com.initialxy.cordova.themeablebrowser' : 'cordova-plugin-themeablebrowser'
}

module.exports.oldToNew = map;

var reverseMap = {};
Object.keys(map).forEach(function(elem){
    reverseMap[map[elem]] = elem;
})

module.exports.newToOld = reverseMap;
