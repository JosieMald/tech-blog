$(document).ready(() => {
// DISPLAY CREATE POST -------------------------------------------------------------------
$(document).on("click", ".create-new-post", (e) => {
    e.preventDefault();
    $(".post-form").removeClass("hide");
    $(".create-new-post").addClass("hide");
})

});