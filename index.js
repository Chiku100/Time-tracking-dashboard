$("#daily").on("click", () => {
    $("#daily").addClass("texture")
    $("#monthly").removeClass("texture")
    $("#weekly").removeClass("texture")
    $("span.daily").removeClass("viz");
    $("span.week").addClass("viz");
    $("span.month").addClass("viz");
    $("small.daily").removeClass("viz");
    $("small.week").addClass("viz");
    $("small.month").addClass("viz");
})
$("#weekly").on("click", () => {
    $("#daily").removeClass("texture")
    $("#monthly").removeClass("texture")
    $("#weekly").addClass("texture")
    $("span.week").removeClass("viz");
    $("span.daily").addClass("viz");
    $("span.month").addClass("viz");
    $("small.week").removeClass("viz");
    $("small.daily").addClass("viz");
    $("small.month").addClass("viz");
})
$("#monthly").on("click", () => {
    $("#daily").removeClass("texture")
    $("#monthly").addClass("texture")
    $("#weekly").removeClass("texture")
    $("span.month").removeClass("viz");
    $("span.daily").addClass("viz");

    $("span.week").addClass("viz");
    $("small.month").removeClass("viz");
    $("small.daily").addClass("viz");
    $("small.week").addClass("viz");
})

let buttons = document.querySelectorAll("button");
let contents = document.querySelectorAll(".content");
for (let i = 0; i < buttons.length; i++) {
    contents[i].addEventListener("mouseover", () => {
        buttons[i].style.backgroundColor = "hsl(235, 45%, 61%)";
    })
    contents[i].addEventListener("mouseout", () => {
        buttons[i].style.backgroundColor = "hsl(235, 46%, 20%)";
    })
}