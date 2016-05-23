function initBuienRader(gridCell, widgetConfig) {

    $(gridCell).css('cursor', 'pointer');

    $(gridCell).on('click', function() {
        window.open('http://buienradar.nl', 'buienradar');
        return false;
    });

    updateBuienRadar(gridCell, widgetConfig);
}

function updateBuienRadar(gridCell, widgetConfig) {

    var uniqueString = (new Date()).getTime();

    gridCell.css('background-image', 'url(http://api.buienradar.nl/image/1.0/RadarMapNL?w=400&h=400&' + uniqueString + ')');
    gridCell.css('background-size', 'cover');
    gridCell.css('background-position', 'center center');
    gridCell.css('background-repeat', 'no-repeat');

    setTimeout(function() {
        updateBuienRadar(gridCell, widgetConfig);
    }, 900000); // 15 minutes
}

widgets.buienradar = initBuienRader;
