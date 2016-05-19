function updateStock(gridCell, widgetConfig) {

    $.getJSON({
        url: 'http://www.google.com/finance/info?q=' + widgetConfig.symbol + '&callback=?',
        async: false,
        success: function(data) {

            gridCell.removeClass('stock--negative', 'stock--positive');

            if (data[0].cp >= 0) {
              gridCell.addClass('stock--positive');
            } else {
              gridCell.addClass('stock--negative');
            }

            gridCell.find('.grid__cell__label').html(data[0].t);

            gridCell.find('.grid__cell__value').html(data[0].cp + '%');

        },
        error: function() {
            console.log('ERROR');
        }
    });

    setTimeout(function() {
        updateStock(gridCell, widgetConfig);
    }, 30000);

}

widgets.stock = updateStock;
