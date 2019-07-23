const observableModule = require("tns-core-modules/data/observable");

function AlertsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = AlertsViewModel;