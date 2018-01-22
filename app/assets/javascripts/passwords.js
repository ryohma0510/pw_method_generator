$(document).on('turbolinks:load', function() {
  var addDeleteRowEvent = function () {
    $('.jsDeleteRow').on('click', function () {
      $(this).remove();
    });
  }

  addDeleteRowEvent();

  $('.jsAddPwChild').click(function (e) {
    e.preventDefault();
    var pwLabel = $(this).parent().parent().find('.jsPwLabel');
    var pwValue = $(this).parent().parent().find('.jsPwValue');
    var rowNum = $(this).parent().parent().parent().find('.jsDeleteRow').length + 1;
    if (pwLabel.val() && pwValue.val()) {
      $('.jsNewPwForm').before('<tr class="jsDeleteRow"><td>' + rowNum + '</td><td>' + pwLabel.val() + '</td><td>' + pwValue.val() + '</td></tr>');
      pwLabel.val('');
      pwValue.val('');
      addDeleteRowEvent();
    } else {
      alert('入力欄を2つとも埋めてください');
    }
  });

  $('.jsAddPwMethod').click(function (e) {
    e.preventDefault();
    var newPwMethod = $(this).prev();
    var rowNum = $(this).parent().parent().parent().find('.jsDeleteRow').length + 1;
    if (newPwMethod.val()) {
      $('.jsNewPwMethodForm').before('<tr class="jsDeleteRow"><td>' + rowNum + '</td><td>' + newPwMethod.val() + '</td></tr>');
      newPwMethod.val('');
      addDeleteRowEvent();
    } else {
      alert('入力欄を埋めてください');
    }
  });

  $('.jsAddCondition').click(function (e) {
    e.preventDefault();
    var condition = $(this).parent().parent().find('.jsCondition');
    var conditionValue = $(this).parent().parent().find('.jsConditionValue');
    if (condition.val() && conditionValue.val()) {
      $(this).parent().parent('.jsNewPwConditionForm').before('<tr class="jsDeleteRow"><td>' + condition.val() + '</td><td>' + conditionValue.val() + '</td></tr>');
      condition.val('');
      conditionValue.val('');
      addDeleteRowEvent();
    } else {
      alert('入力欄を2つとも埋めてください');
    }
  });
});
