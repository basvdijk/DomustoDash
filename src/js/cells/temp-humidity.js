function updateTempHumidity(gridCell, cellConfig, data) {
  var valueTemp = parseFloat(data.Temp).toFixed(config.tempHumidity.tempDecimals);
  var valueHumidity = parseFloat(data.Humidity).toFixed(config.tempHumidity.humidityDecimals);

  gridCell.find('.grid__cell__value').html(
    valueTemp +
    getConfigValue('tempHumidity', 'tempUnit') +
    getConfigValue('tempHumidity', 'separator') +
    valueHumidity +
    getConfigValue('tempHumidity', 'humidityUnit')
  );

  var customLabel = cellConfig.label;
  gridCell.find('.grid__cell__label').html(customLabel || data.Name);

  gridCell.find('.grid__cell__status').html(data[cellConfig.statusField]);
}
