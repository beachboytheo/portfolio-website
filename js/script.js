console.log("Hi! Welcome to my portfolio site")

$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblings(".project-details").slideToggle();
    });
});
