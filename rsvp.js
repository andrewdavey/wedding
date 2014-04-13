(function() {

  $(function() {
    var form = $("#rsvp-form");
    var attendance = $("#attendance");
    var notAttending = "regrets";
    form.ajaxForm({
      iframe: true,
      beforeSubmit: function() {
        form.hide();
        if (attendance.val() === notAttending) {
          $("#rsvp-no").show();
        } else {
          $("#rsvp-yes").show();
        }
      }
    });
  });

}());
