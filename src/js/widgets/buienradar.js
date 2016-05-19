function updateBuienRadar(gridCell, widgetConfig) {

    gridCell.css('background-image', 'url(http://buienradar.nl/image?type=zozw)');
    gridCell.css('background-size', 'cover');
    gridCell.css('background-position', 'center center');
    gridCell.css('background-repeat', 'no-repeat');

    setTimeout(function() {
        updateBuienRadar(gridCell, widgetConfig);
    }, 60000);
}

widgets.buienradar = updateBuienRadar;
