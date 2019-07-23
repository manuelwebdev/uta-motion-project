const AlertsViewModel = require("./alerts-view-model");
const webViewModule = require("tns-core-modules/ui/web-view");
const Observable = require("tns-core-modules/data/observable").Observable;


function onNavigatingTo(args) {
    const component = args.object;
    const vm = new Observable();

    component.bindingContext = new AlertsViewModel();
    // loading the WebView source while providing a HTML code
    vm.set("firstWebViewSRC", "<html><html><head><title>MyTitle</title><meta charset='utf-8' /></head><body><a class='twitter-timeline' href='https://twitter.com/RideUTA?ref_src=twsrc%5Etfw'>Tweets by RideUTA</a> <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script></body></html>");
    vm.set("resultFirstWebView", "");
    // loading the WebView source from a local file
    vm.set("resultSecondWebView", "");
    component.bindingContext = vm;
}


exports.onNavigatingTo = onNavigatingTo;