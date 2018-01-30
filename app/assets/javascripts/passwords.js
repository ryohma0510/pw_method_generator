$(document).on('turbolinks:load', function() {
  var addDeleteRowEvent = function() {
    $('.jsDeleteRow').on('dblclick', function () {
      $(this).remove();
      reNamingPwCompTable();
      reNamingPwCompConditionTable();
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

  var reNamingPwCompConditionTable = function() {
    var pwCompConditions = $('.jsPwCompCondition')
    var pwCompConditionNums = $('.jsPwCompConditionNum')

    $.each(pwCompConditions, function(index, pwCompCondition) {
      $(pwCompCondition).attr('name', 'pwCompCondition' + (index + 1));
    });

    $.each(pwCompConditionNums, function(index, pwCompConditionNum) {
      $(pwCompConditionNum).attr('name', 'pwCompConditionNum' + (index + 1));
    });
  }

  addDeleteRowEvent();

  $('.jsAddPwComp').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwCompNumbering').length + 1;
    var tableDataNumberHTML = '<td class="jsPwCompNumbering">' + count +'</td>';
    var tableDataPwCompLabelHTML = '<td><input type="text" name="pwCompLabel'+ count + '" value="" class="form-control jsPwCompLabel"></td>';
    var tableDataPwCompValueHTML = '<td><input type="text" name="pwCompValue'+ count + '" value="" class="form-control jsPwCompValue"></td>';
    $('.jsNewPwCompForm').before('<tr class="jsDeleteRow">' + tableDataNumberHTML + tableDataPwCompLabelHTML + tableDataPwCompValueHTML + '</tr>');
    addDeleteRowEvent();
  });

  $('.jsAddPwCompCondition').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwCompCondition').length + 1
    var tableDataPwCompConditionHTML = '<td><input type="text" name="pwCompCondition'+ count + '" value="" class="form-control jsPwCompCondition"></td>';
    var tableDataPwCompConditionNumHTML = '<td><input type="text" name="pwCompConditionNum'+ count + '" value="" class="form-control jsPwCompConditionNum"></td>';
    $('.jsNewPwCompConditionForm').before('<tr class="jsDeleteRow">' + tableDataPwCompConditionHTML + tableDataPwCompConditionNumHTML + '</tr>');
    addDeleteRowEvent();
  })

});
