function updateCalendar(gridCell, widgetConfig) {
    var monthNames = [
        'JAN',
        'FEB',
        'MRT',
        'APR',
        'MEI',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OKT',
        'NOV',
        'DEC'
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    var separator = ':';

    if (widgetConfig.blinkSeparator) {
      separator = seconds %2 == 0 ? ':' : ' ';
    } else {
      separator = ':';
    }

    if (widgetConfig.showSeconds) {
      gridCell.find('.grid__cell__value').html(hours + separator + minutes + separator + seconds);
    } else {
      gridCell.find('.grid__cell__value').html(hours + separator + minutes);
    }

    gridCell.find('.grid__cell__label').html(day + ' ' + monthNames[monthIndex] + ' ' + year);

    setTimeout(function() {
        updateCalendar(gridCell, widgetConfig);
    }, 1000);
}

widgets.calendar = updateCalendar;
