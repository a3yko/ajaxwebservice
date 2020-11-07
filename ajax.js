function mon() {
    $(document).ready(function () {
        $("#mon").click(function () {
            $.ajax({
                url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=officeHours&format=json&day=monday",
                success: function (json) {
                    $("#ohours").html("<br>" + json.officeHours[0].person + "<br>" + json.officeHours[0].time + "<br>" + json.officeHours[0].location);
                },
                error: function(json){
                    alert("There are no office hours on Monday!");
                }
            });
        });
    });
}

function tues() {
    $(document).ready(function () {
        $("#tues").click(function () {
            $.ajax({
                url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=officeHours&format=json&day=tuesday",
                success: function (json) {
                    $("#ohours").html("<br>" + json.officeHours[0].person + "<br>" + json.officeHours[0].time + "<br>" + json.officeHours[0].location);
                },
                error: function(json){
                    alert("There are no office hours on Tuesday!");
                }
            });
        });
    });
}

function wed() {
    $(document).ready(function () {
        $("#wed").click(function () {
            $.ajax({
                url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=officeHours&format=json&day=wednesday",
                success: function (json) {
                    $("#ohours").html("<br>" + json.officeHours[0].person + "<br>" + json.officeHours[0].time + "<br>" + json.officeHours[0].location);
                },
                error: function(json){
                    alert("There are no office hours on Wednesday!");
                }
            });
        });
    });
}

function thurs() {
    $(document).ready(function () {
        $("#thurs").click(function () {
            $.ajax({
                url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=officeHours&format=json&day=thursday",
                success: function (json) {
                    $("#ohours").html("<br>" + json.officeHours[0].person + "<br>" + json.officeHours[0].time + "<br>" + json.officeHours[0].location);
                },
                error: function(json){
                    alert("There are no office hours on Thursday!");
                }
            });
        });
    });
}

function fri() {
    $(document).ready(function () {
        $("#fri").click(function () {
            $.ajax({
                url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=officeHours&format=json&day=friday",
                success: function (json) {
                    $("#ohours").html("<br>" + json.officeHours[0].person + "<br>" + json.officeHours[0].time + "<br>" + json.officeHours[0].location);
                },
                error: function(json){
                    alert("There are no office hours on Friday!");
                }
            });
        });
    });
}

$(document).ready(function () {
    $.ajax({
        url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=currentAssignment&format=json",
        success: function (json) {
            var d = new Date((parseInt(json.dueDateTimestamp) * 1000));
            $("#assign").html(json.assignmentName + '<br>Due: ' + d);
        },
        error: function(json){
            alert("There is no assignment due");
        }
    });
});

$(document).ready(function () {
    $.ajax({
        url: "https://www.mizzouit.com/2830/challenge9/classInfo.php?content=classType",
        success: function (json) {
            $("#classt").html(json);
        }
    });
});