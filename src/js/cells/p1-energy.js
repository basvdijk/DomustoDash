function updateP1Energy(gridCell, cellConfig, data) {
  gridCell.find('.grid__cell__value').html(data[cellConfig.field] || data.Usage);

  var customLabel = cellConfig.label;
  gridCell.find('.grid__cell__label').html(customLabel || data.Name);
}
