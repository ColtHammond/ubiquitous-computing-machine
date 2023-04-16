$(function () {
  var currentDayEl = $('#currentDay');
  currentDayEl.text(dayjs().format('dddd, MMMM D'));

  $('.time-block').each(function () {
    var hour = $(this).data('hour');

    $(this)
      .find('.description')
      .val(localStorage.getItem('hour-' + hour));

    if (hour < dayjs().hour()) {
      $(this).addClass('past');
    } else if (hour === dayjs().hour()) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  $('.saveBtn').on('click', function () {
    var hour = $(this).closest('.time-block').data('hour');

    var input = $(this).siblings('.description').val().trim();

    localStorage.setItem('hour-' + hour, input);
  });
});
