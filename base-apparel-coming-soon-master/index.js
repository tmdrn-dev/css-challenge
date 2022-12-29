let email = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$");

$("input").on("click", function (event) {
  if (this.value === "Email Address") {
    $("input").val("");
  }
});

$("input").on("invalid", function (event) {
  $(".icon-error").removeClass("hidden");
  $(".error-message").removeClass("hidden");
  $("input").addClass("error");
});

$("input").on("valid", function (event) {
  $(".icon-error").addClass("hidden");
  $(".error-message").addClass("hidden");
});

$("input").on("input", function (event) {
  if (email.test(this.value)) {
    $(".icon-error").addClass("hidden");
    $(".error-message").addClass("hidden");
    $("input").removeClass("error");
  }
});
