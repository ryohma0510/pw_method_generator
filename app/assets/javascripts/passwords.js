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

  var reNamingPwMethodTable = function() {
    var pwMethodNumerings = $('.jsPwMethodNumbering');
    var pwMethods = $('.jsPwMethod');

    $.each(pwMethodNumerings, function(index, pwMethodNumering) {
      $(pwMethodNumering).text(index + 1);
    });

    $.each(pwMethods, function(index, pwMethod) {
      $(pwMethod).attr('name', 'pwMethod' + (index + 1));
    });
  }

  var reNamingPwMethodConditionTable = function() {
    var pwMethodConditions = $('.jsPwMethodCondition');
    var pwMethodConditionValues = $('.jsPwMethodConditionValue');

    $.each(pwMethodConditions, function(index, pwMethodCondition) {
      $(pwMethodCondition).attr('name', 'pwMethodCondition' + (index + 1));
    })

    $.each(pwMethodConditionValues, function(index, pwMethodConditionValue) {
      $(pwMethodConditionValue).attr('name', 'pwMethodConditionValue' + (index + 1));
    })
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
    var count = $('.jsPwCompCondition').length + 1;
    var tableDataPwCompConditionHTML = '<td><input type="text" name="pwCompCondition'+ count + '" value="" class="form-control jsPwCompCondition"></td>';
    var tableDataPwCompConditionNumHTML = '<td><input type="text" name="pwCompConditionNum'+ count + '" value="" class="form-control jsPwCompConditionNum"></td>';
    $('.jsNewPwCompConditionForm').before('<tr class="jsDeleteRow">' + tableDataPwCompConditionHTML + tableDataPwCompConditionNumHTML + '</tr>');
    addDeleteRowEvent();
  })

  $('.jsAddPwMethod').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwMethodNumbering').length + 1;
    var tableDataPwMethodNumberHTML = '<td class="jsPwMethodNumbering">' + count +'</td>';
    var tableDataPwMethodHTML = '<td><input type="text" name="pwMethod'+ count + '" value="" class="form-control jsPwMethod"></td>';
    $('.jsNewPwMethodForm').before('<tr class="jsDeleteRow">' + tableDataPwMethodNumberHTML + tableDataPwMethodHTML + '</tr>');
    addDeleteRowEvent();
  });

  $('.jsAddPwMethodCondition').on('click', function(e) {
    e.preventDefault();
    var count = $('.jsPwMethodCondition').length + 1;
    var tableDataPwMethodCondition = '<td><input type="text" name="pwMethodCondition'+ count + '" value="" class="form-control jsPwMethodCondition"></td>';
    var tableDataPwMethodConditionValue = '<td><input type="text" name="pwMethodConditionValue'+ count + '" value="" class="form-control jsPwMethodConditionValue"></td>';
    $('.jsNewPwMethodConditionForm').before('<tr class="jsDeleteRow">' + tableDataPwMethodCondition + tableDataPwMethodConditionValue + '</tr>');
    addDeleteRowEvent();
  });

  //
  // $('.jsAddPwChild').click(function (e) {
  //   e.preventDefault();
  //   var pwLabel = $(this).parent().parent().find('.jsPwLabel');
  //   var pwValue = $(this).parent().parent().find('.jsPwValue');
  //   var rowNum = $(this).parent().parent().parent().find('.jsDeleteRow').length + 1;
  //   if (pwLabel.val() && pwValue.val()) {
  //     $('.jsNewPwForm').before('<tr class="jsDeleteRow"><td>' + rowNum + '</td><td>' + pwLabel.val() + '</td><td>' + pwValue.val() + '</td></tr>');
  //     pwLabel.val('');
  //     pwValue.val('');
  //     addDeleteRowEvent();
  //   } else {
  //     alert('入力欄を2つとも埋めてください');
  //   }
  // });
  //
  // $('.jsAddPwMethod').click(function (e) {
  //   e.preventDefault();
  //   var newPwMethod = $(this).prev();
  //   var rowNum = $(this).parent().parent().parent().find('.jsDeleteRow').length + 1;
  //   if (newPwMethod.val()) {
  //     $('.jsNewPwMethodForm').before('<tr class="jsDeleteRow"><td>' + rowNum + '</td><td>' + newPwMethod.val() + '</td></tr>');
  //     newPwMethod.val('');
  //     addDeleteRowEvent();
  //   } else {
  //     alert('入力欄を埋めてください');
  //   }
  // });
  //
  // $('.jsAddCondition').click(function (e) {
  //   e.preventDefault();
  //   var condition = $(this).parent().parent().find('.jsCondition');
  //   var conditionValue = $(this).parent().parent().find('.jsConditionValue');
  //   if (condition.val() && conditionValue.val()) {
  //     $(this).parent().parent('.jsNewPwConditionForm').before('<tr class="jsDeleteRow"><td>' + condition.val() + '</td><td>' + conditionValue.val() + '</td></tr>');
  //     condition.val('');
  //     conditionValue.val('');
  //     addDeleteRowEvent();
  //   } else {
  //     alert('入力欄を2つとも埋めてください');
  //   }
  // });
});
