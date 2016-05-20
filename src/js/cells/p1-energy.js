function updateP1Energy(gridCell, cellConfig, object) {
  gridCell.find('.grid__cell__value').html(object[cellConfig.field] || object.Usage);

  var customLabel = cellConfig.label;
  gridCell.find('.grid__cell__label').html(customLabel || object.Name);
}
