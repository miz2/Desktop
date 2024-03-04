function func1(){
    // $("#img1").fadeToggle();
    $("#img1").fadeToggle(3000);
}
function func2() {
    // $("div").css('background-color', 'orange');
    // $('#p1').css('font-style', 'italic');
    // $('.p1').css('font-style', 'italic');
    // $('#div1, #div2').css('background-color', 'green');
    $('#div1,li').css('background-color','purple')
    $('div>p').fadeToggle()
    $("p:first").fadeToggle()
    $("p:even").fadeToggle()
}
