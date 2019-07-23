const HomeItemsViewModel = require("./home-items-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function favorites(args) {
    console.log("Hello World!");
    console.log(args);
    // const view = args.view;
    // const page = view.page;
    // const tappedItem = view.bindingContext;

    // page.frame.navigate({
    //     moduleName: "favorites/favorites-page",
    //     context: tappedItem
    // });

    
}

exports.favorites = favorites;
exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
