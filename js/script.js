console.log("Hi! Welcome to my portfolio site")

$(document).ready(function() {
  $(".project-preview").on("click", function() {
    $(this).siblin gs(".project-details").slideToggle();
    });
});
