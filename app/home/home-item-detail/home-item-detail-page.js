// NEW
const dialogsModule = require("tns-core-modules/ui/dialogs");
const observable = require("tns-core-modules/data/observable");
var pageData = new observable.Observable();

exports.loaded = function(args) {
  pageData.set("NBtime", true);
  args.object.bindingContext = pageData;  
}

// End of NEW

exports.toggle = function() {
    pageData.set("NBtime", !pageData.get("NBtime"));
}


function onTap(args){
    console.log(args);
    // button = args.object;
    // button.bindingContext = true;
    // button.text = 'Hide';

}

exports.onTap = onTap;


function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = args.context;
}

function onBackButtonTap(args) {
    const view = args.object;
    const page = view.page;

    page.frame.goBack();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onBackButtonTap = onBackButtonTap;

