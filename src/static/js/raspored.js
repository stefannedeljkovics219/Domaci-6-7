$(document).ready(function () {
    $("#input1").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#body1 tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    $(".pretraga").click(function () {
        var value = $(this).html().toLowerCase();
        $("#input1").val(value);
        $("#body1 tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});