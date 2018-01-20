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
    if (pwLabel.val() && pwValue.val()) {
      $('.jsNewPwForm').before('<tr class="jsDeleteRow"><td>' + pwLabel.val() + '</td><td>' + pwValue.val() + '</td></tr>');
      pwLabel.val('');
      pwValue.val('');
      addDeleteRowEvent();
    } else {
      alert('入力欄を2つとも埋めてください');
    }
  });
});
