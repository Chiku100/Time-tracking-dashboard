// with json
let boxes = document.querySelectorAll(".info .current span");
let others = document.querySelectorAll(".info .before small");
let buttons = document.querySelectorAll("button");
let contents = document.querySelectorAll(".content");
$.getJSON("./data.json", function (data) {
    $("#daily").on("click", () => {
        for (let i = 0; i < data.length; i++) {
            $("#daily").addClass("texture")
            $("#monthly").removeClass("texture")
            $("#weekly").removeClass("texture")
            $(boxes[i]).html(data[i].timeframes.daily.current + "hrs");
            $(others[i]).html("Last week- " + data[i].timeframes.daily.previous + "hrs");
        }
    })
    $("#weekly").on("click", () => {
        for (let i = 0; i < data.length; i++) {
            $("#daily").removeClass("texture")
            $("#monthly").removeClass("texture")
            $("#weekly").addClass("texture")
            $(boxes[i]).html(data[i].timeframes.weekly.current + "hrs");
            $(others[i]).html("Last week- " + data[i].timeframes.weekly.previous + "hrs");
        }
    })
    $("#monthly").on("click", () => {
        for (let i = 0; i < data.length; i++) {
            $("#daily").removeClass("texture")
            $("#monthly").addClass("texture")
            $("#weekly").removeClass("texture")
            $(boxes[i]).html(data[i].timeframes.monthly.current + "hrs");
            $(others[i]).html("Last week- " + data[i].timeframes.monthly.previous + "hrs");
        }
    })
})
for (let i = 0; i < buttons.length; i++) {
    contents[i].addEventListener("mouseover", () => {
        buttons[i].style.backgroundColor = "hsl(235, 45%, 61%)";
    })
    contents[i].addEventListener("mouseout", () => {
        buttons[i].style.backgroundColor = "hsl(235, 46%, 20%)";
    })
}
