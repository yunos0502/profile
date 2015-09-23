/**
 * Created by yunos on 15. 9. 24..
 */

//gmap
var map = null;
var lat = 37.602572; //위도
var lng = 127.079285; //경도

$(function() {
    map = new GMaps({"el":"#map", "lat":lat, "lng":lng, "zoomControl":true});
    map.addMarker({
        "lat":lat, "lng":lng, "title":"PARK GYU-AE",
        "click":function(e) {console.log(e);},
        "mouseover":function(e) {console.log(e);},
        "infoWindow":{"content":"<p>You clicked here!</p><p><a href=\"https://www.google.com/maps/place/중화역/@37.602572,127.079285,17z/\" target=\"_blank\" style=\"font-size: 10px;\">Google 지도에서 보기</a></p>"}
    });
});

$(function() {
    //header 주메
    var now = true;

    $(".close_btn a").bind('click focusin', function() {
        if(now === false) {
            $(this).css({'backgroundImage':'url("images/menu_btn.png")'});
            $('nav').stop(true, true).animate({left: '2000px'}, 1000, 'easeOutQuad');
            $('#header_left p').stop(true, true).animate({left: '30%'}, 2500, 'easeOutElastic');
            now = true;
        }else {
            $(this).css({'backgroundImage':'url("images/close_btn.png")'});
            $('nav').stop(true, true).animate({left: '50%'}, 1800, 'easeOutQuad');
            $('#header_left p').stop(true, true).animate({left: '0'}, 3500, 'easeOutElastic');
            now = false;
        }
    });
    $(window).ready(function() {
        //if($("#header_wrap").scrollTop() === 0) {
        $('#header_left p').stop(true, true).animate({'height': '252px'}, 4000, 'linear');
        //}
    });

    //pic_left
    $(".pic_left").bind("mouseenter", function() {
        $(this).children("img:eq(1)").fadeOut(2000);
    }).bind("mouseleave", function() {
        $(this).children("img:eq(1)").fadeIn(2000);
    });
    //aboutDesc
    $(window).scroll(function () {
        if ($(this).scrollTop() > $('header').height()/2) {
            $(".aboutMe").typed({
                strings: ["술보다 커피를 사랑하는 웹 퍼블리셔 박규애입니다.<br> 논리적이고 시멘틱한 코드를 지향하며, 효율적이고 이해하기 쉬운 코드를 만들고자 노력하고 있습니다."],
                typeSpeed: 0
            });
        }
    });

    //portpolio colorBox
    var pDesc = ["Web Development", "Web Development", "web RENEWAL", "download", "Web Development"];
    var pTitle = ["Front-end Web Developer | Park Gyu-Ae", "CAFE ALICE", "한국철도시설공단 RENEWAL", "GITHUB", "ETC"];
    colorBox(pDesc, pTitle);

    //education
    $(window).scroll(function() {
        if($(this).scrollTop() > $('header').height()*3) {
            $('.edu_frontend').animate({'left':'0'}, 6000, "easeOutElastic");
            $('.edu_java').animate({'left':'0'}, 6000, "easeOutElastic");
        }
    });
});