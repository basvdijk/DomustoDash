function updateSwitchOnOff(gridCell, cellConfig, data) {

  gridCell.addClass('switch');

  gridCell.find('.grid__cell__value').html(data.Data == 'On' ? config.switch.labelOn : config.switch.labelOff);

  gridCell.removeClass('switch--on', 'switch--off');

  gridCell.addClass('switch--' + data.Data.toLowerCase());

  var customLabel = cellConfig.label;
  gridCell.find('.grid__cell__label').html(customLabel || data.Name);

  gridCell.find('.grid__cell__status').hide();

}

function switchToggle(idx, switchcmd) {

    $.ajax({
        url: config.domoticz.url + "/json.htm?type=command&param=switchlight&idx=" + idx + "&switchcmd=" + switchcmd + "&level=0",
        async: false,
        dataType: 'json',
        success: function() {
            console.log('SUCCES');
        },
        error: function() {
            console.log('ERROR');
        }
    });

    refresh();

};
