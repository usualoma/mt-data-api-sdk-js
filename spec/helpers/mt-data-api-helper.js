function itWithMt() {
    if (isMovableTypeServerRunning) {
        it.apply(this, arguments);
    }
    else {
        xit.apply(this, arguments);
    }
}

function newDataAPI(options) {
    var opts = {
        baseUrl:  dataApiBaseUrl,
        clientId: "Test"
    };
    if (options) {
        for (k in options) {
            opts[k] = options[k];
        }
    }
    return new MT.DataAPI(opts);
}
