function checkForDomoticzUpdates(gridCell, widgetConfig) {

    var url = config.domoticz.url + "/json.htm?type=command&param=getversion&jsoncallback=?";
    $.getJSON(url, {
        format: 'json'
    }, function(data) {

        if (data.HaveUpdate) {
            gridCell.find('.grid__cell__value').html('new version!');
            gridCell.find('.grid__cell__label').html(data.version);
        } else {
            gridCell.find('.grid__cell__value').html(':)');
            gridCell.find('.grid__cell__label').html('up to date');
        }

    });

    setTimeout(function() {
        checkForDomoticzUpdates(gridCell, widgetConfig);
    }, 86400); // 24 hour
}

widgets.domoticzUpdateAvailable = checkForDomoticzUpdates;
