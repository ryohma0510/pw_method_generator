$(document).on('turbolinks:load', function() {
  var addDeleteRowEvent = function() {
    $('.jsDeleteRow').on('dblclick', function () {
      $(this).remove();
      reNamingPwCompTable();
    });
  }

  var reNamingPwCompTable = function() {
    var pwCompNumberings = $('.jsPwCompNumbering')
    var pwCompLabels = $('.jsPwCompLabel')
    var pwCompValues = $('.jsPwCompValue')

    $.each(pwCompNumberings, function(index, pwCompNumbering) {
      $(pwCompNumbering).text(index + 1);
    })

    $.each(pwCompLabels, function(index, pwCompLabel) {
      $(pwCompLabel).attr('name', 'pwCompLabel' + (index + 1));
    });

    $.each(pwCompValues, function(index, pwCompValue) {
      $(pwCompValue).attr('name', 'pwCompValue' + (index + 1));
    })
  }

  $('.jsAddPwComp').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwCompNumbering').length + 1;
    var tableDataNumberHTML = '<td class="jsPwCompNumbering jsDeleteRow">' + count +'</td>';
    var tableDataPwCompLabelHTML = '<td><input type="text" name="pwCompLabel'+ count + '" value="" class="form-control jsPwCompLabel"></td>';
    var tableDataPwCompValueHTML = '<td><input type="text" name="pwCompValue'+ count + '" value="" class="form-control jsPwCompValue"></td>';
    $('.jsNewPwCompForm').before('<tr>' + tableDataNumberHTML + tableDataPwCompLabelHTML + tableDataPwCompValueHTML + '</tr>');
    addDeleteRowEvent();
  });

  addDeleteRowEvent();
});
