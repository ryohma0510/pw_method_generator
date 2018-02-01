$(document).on('turbolinks:load', function() {
  var addDeleteRowEvent = function() {
    $('.jsDeleteRow').on('dblclick', function () {
      $(this).remove();
      reNamingPwCompTable();
      reNamingPwCompConditionTable();
      reNamingPwMethodTable();
      reNamingPwMethodConditionTable();
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
      $(pwCompLabel).attr('name', 'pw_comp[' + (index + 1) + '][label]');
    });

    $.each(pwCompValues, function(index, pwCompValue) {
      $(pwCompValue).attr('name', 'pw_comp[' + (index + 1) + '][value]');
    })
  }

  var reNamingPwCompConditionTable = function() {
    var pwCompConditions = $('.jsPwCompCondition')
    var pwCompConditionNums = $('.jsPwCompConditionNum')

    $.each(pwCompConditions, function(index, pwCompCondition) {
      $(pwCompCondition).attr('name', 'pw_comp_condition[' + (index + 1) + '][label]');
    });

    $.each(pwCompConditionNums, function(index, pwCompConditionNum) {
      $(pwCompConditionNum).attr('name', 'pw_comp_condition[' + (index + 1) + '][value]');
    });
  }

  var reNamingPwMethodTable = function() {
    var pwMethodNumerings = $('.jsPwMethodNumbering');
    var pwMethods = $('.jsPwMethod');

    $.each(pwMethodNumerings, function(index, pwMethodNumering) {
      $(pwMethodNumering).text(index + 1);
    });

    $.each(pwMethods, function(index, pwMethod) {
      $(pwMethod).attr('name', 'pw_method[' + (index + 1) + ']');
    });
  }

  var reNamingPwMethodConditionTable = function() {
    var pwMethodConditions = $('.jsPwMethodCondition');
    var pwMethodConditionValues = $('.jsPwMethodConditionValue');

    $.each(pwMethodConditions, function(index, pwMethodCondition) {
      $(pwMethodCondition).attr('name', 'pw_method_condition[' + (index + 1) + '][label]');
    })

    $.each(pwMethodConditionValues, function(index, pwMethodConditionValue) {
      $(pwMethodConditionValue).attr('name', 'pw_method_condition[' + (index + 1) + '][value]');
    })
  }

  addDeleteRowEvent();

  $('.jsAddPwComp').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwCompNumbering').length + 1;
    var tableDataNumberHTML = '<td class="jsPwCompNumbering">' + count +'</td>';
    var tableDataPwCompLabelHTML = '<td><input type="text" name="pw_comp[' + count + '][label]" value="" class="form-control jsPwCompLabel"></td>';
    var tableDataPwCompValueHTML = '<td><input type="text" name="pw_comp[' + count + '][value]" value="" class="form-control jsPwCompValue"></td>';
    $('.jsNewPwCompForm').before('<tr class="jsDeleteRow">' + tableDataNumberHTML + tableDataPwCompLabelHTML + tableDataPwCompValueHTML + '</tr>');
    addDeleteRowEvent();
  });

  $('.jsAddPwCompCondition').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwCompCondition').length + 1;
    var tableDataPwCompConditionHTML = '<td><input type="text" name="pw_comp_condition['+ count + '][label]" value="" class="form-control jsPwCompCondition"></td>';
    var tableDataPwCompConditionNumHTML = '<td><input type="text" name="pw_comp_condition['+ count + '][value]" value="" class="form-control jsPwCompConditionNum"></td>';
    $('.jsNewPwCompConditionForm').before('<tr class="jsDeleteRow">' + tableDataPwCompConditionHTML + tableDataPwCompConditionNumHTML + '</tr>');
    addDeleteRowEvent();
  });

  $('.jsAddPwMethod').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwMethodNumbering').length + 1;
    var tableDataPwMethodNumberHTML = '<td class="jsPwMethodNumbering">' + count +'</td>';
    var tableDataPwMethodHTML = '<td><input type="text" name="pw_method['+ count + ']" value="" class="form-control jsPwMethod"></td>';
    $('.jsNewPwMethodForm').before('<tr class="jsDeleteRow">' + tableDataPwMethodNumberHTML + tableDataPwMethodHTML + '</tr>');
    addDeleteRowEvent();
  });

  $('.jsAddPwMethodCondition').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwMethodCondition').length + 1;
    var tableDataPwMethodCondition = '<td><input type="text" name="pw_method_condition['+ count + '][label]" value="" class="form-control jsPwMethodCondition"></td>';
    var tableDataPwMethodConditionValue = '<td><input type="text" name="pw_method_condition['+ count + '][value]" value="" class="form-control jsPwMethodConditionValue"></td>';
    $('.jsNewPwMethodConditionForm').before('<tr class="jsDeleteRow">' + tableDataPwMethodCondition + tableDataPwMethodConditionValue + '</tr>');
    addDeleteRowEvent();
  });
});
