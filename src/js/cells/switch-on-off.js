function updateSwitchOnOff(gridCell, cellConfig, data) {

  gridCell.addClass('switch');

  gridCell.find('.grid__cell__value').html(data.Data == 'On' ? config.switch.labelOn : config.switch.labelOff);

  gridCell.removeClass('switch--on');
  gridCell.removeClass('switch--off');

  gridCell.addClass('switch--' + data.Data.toLowerCase());

  var customLabel = cellConfig.label;
  gridCell.find('.grid__cell__label').html(customLabel || data.Name);

  gridCell.find('.grid__cell__status').hide();

  gridCell.off('click');

  gridCell.on('click', function(e) {

    switchToggle(cellConfig.idx, data.Data == 'On' ? 'Off' : 'On');

    gridCell.removeClass('switch--on');
    gridCell.removeClass('switch--off');

    gridCell.addClass(data.Data == 'On' ? 'switch--off' : 'switch--on');
  });

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
