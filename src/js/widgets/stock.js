function updateStock(gridCell, widgetConfig) {

    $.getJSON({
        url: 'http://www.google.com/finance/info?q=' + widgetConfig.symbol + '&callback=?',
        async: false,
        success: function(data) {

            var lastTrade = new Date(data[0].lt_dts).getTime();
            var now = new Date().getTime();

            var marketClosed = (now - lastTrade) > 60000;

            gridCell.removeClass('stock--negative');
            gridCell.removeClass('stock--positive');
            gridCell.removeClass('stock--closed');

            if (!marketClosed) {

              if (data[0].cp >= 0) {
                gridCell.addClass('stock--positive');
              } else {
                gridCell.addClass('stock--negative');
              }

            } else {
                gridCell.addClass('stock--closed');
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
    }, 60000);

}

widgets.stock = updateStock;
