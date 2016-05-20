var widgets = {};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function getConfigValue(category, key) {

    if (typeof themeConfig[category] == 'undefined') {
        return config[category][key]
    }

    return themeConfig[category][key] || config[category][key];

}

function refresh() {

    $('.grid__cell__value').html($.noDataValue);

    clearInterval($.refreshTimer);

    var url = config.domoticz.url + "/json.htm?type=devices&plan=" + config.domoticz.roomplan + "&jsoncallback=?";
    $.getJSON(url, {
        format: 'json'
    }, function(data) {

        if (typeof data.result != 'undefined') {
            processData(data.result);

        }
    });

    if (config.dashboard.updateInterval > 0) {
        $.refreshTimer = setInterval(refresh, config.dashboard.updateInterval);
    }
}

function cellConfigByIdx(idx) {

    for (var i = 0; i < config.grid.length; i++) {

        if (config.grid[i].idx == idx) {
            return config.grid[i];
        }

    }

    return null;

}

function processData(response) {

    for (var i = 0; i < config.grid.length; i++) {

        var cellConfig = config.grid[i];

        var data = null;

        $.each(response, function(index, object) {

            if (cellConfig.idx == object.idx) {
                data = object;
            }

        });


        if (data) {

            var cellIndex = cellConfig.cell;
            var gridCell = $('#cell' + cellIndex);

            switch (data.Type) {

                case 'Temp + Humidity':
                    updateTempHumidity(gridCell, cellConfig, data);
                    break;

                case 'P1 Smart Meter':

                    switch (data.SubType) {

                        case 'Energy':
                            updateP1Energy(gridCell, cellConfig, data);
                            break;

                    }
                    break;

                case 'Lighting 1':
                case 'Lighting 2':
                case 'Lighting 3':
                case 'Lighting 4':

                    switch (data.SwitchType) {
                        case 'On/Off':

                            updateSwitchOnOff(gridCell, cellConfig, data);
                            break;

                        case 'Blinds':

                            updateSwitchBlinds(gridCell, cellConfig, data)
                            break;

                    };

                    break;

            }

        }

    }

}



$(document).ready(function() {

    if (config.dashboard.colorScheme) {
        $('body').addClass('theme-' + config.dashboard.colorScheme);
    }

    if (document.createStyleSheet) {
        document.createStyleSheet('themes/' + config.dashboard.theme + '/theme.css');
    } else {
        $("head").append($("<link rel='stylesheet' href='themes/" + config.dashboard.theme + "/theme.css' type='text/css' media='screen' />"));
    }

    $('.grid__cell').wrapInner('<div class="grid__cell__content"></div>');

    if (config.dashboard.showCellNumbers) {

        $('.grid__cell').each(function(index, object) {

            if (typeof $(this).attr('id') !== 'undefined') {

                var cellNumber = $(this).attr('id').replace('cell', '');

                $(object).append('<div class="grid__cell__id">' + cellNumber + '</div>');

            }
        });

    }

    for (var i = 0; i < config.grid.length; i++) {

        var gridCell = $('#cell' + config.grid[i].cell + ' .grid__cell__content');

        if (config.grid[i].widget) {
            widgets[config.grid[i].widget](gridCell, config.grid[i].widgetConfig);
        }

    }

    refresh();
});
