function updateTempHumidity(gridCell, cellConfig, data) {
  var valueTemp = parseFloat(data.Temp).toFixed(config.tempHumidity.tempDecimals);
  var valueHumidity = parseFloat(data.Humidity).toFixed(config.tempHumidity.humidityDecimals);

  var htmlTemp = '<span>' + valueTemp.split('.')[0] + '</span><span class="grid__cell__decimal">.' + valueTemp.split('.')[1] + '</span>';

  gridCell.find('.grid__cell__value').html(
    htmlTemp +
    getConfigValue('tempHumidity', 'tempUnit') +
    getConfigValue('tempHumidity', 'separator') +
    valueHumidity +
    getConfigValue('tempHumidity', 'humidityUnit')
  );

  var customLabel = cellConfig.label;
  gridCell.find('.grid__cell__label').html(customLabel || data.Name);

  gridCell.find('.grid__cell__status').html(data[cellConfig.statusField]);
}
