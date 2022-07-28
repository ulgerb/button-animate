$(document).ready(function () {
    var loading ;
    $(".animate-attack").css({
        width: 50,
        opacity: 0, 
        // objectposition: -40,
        transform:'matrix(-1, 0, 0, 1, 740, 10)',
    });
    $(".animate-attack img").css({
        objectPosition: -40,
    });

    var active = $(".main_button");
    active.on("click", function () {
        
        $(".main_button_bar").css('animation', 'none');
        $(".main_button_bar").animate({width: "50px"},1000,function () {
            $('.main_button_bar p').text('%42');
        })
        $(".main_button_bar").animate({ width: "60px" }, 200, function () {
            $('.main_button_bar p').text('%50');
        })
        $(".main_button_bar").animate({ width: "80px" }, 300, function () {
            $('.main_button_bar p').text('%64');
        })
        $(".main_button_bar").animate({ width: "82px" }, 50, function () {
            $('.main_button_bar p').text('%65');
        })
        $(".main_button_bar").animate({ width: "84px" }, 200, function () {
            $('.main_button_bar p').text('%67');
        })
        $(".main_button_bar").animate({ width: "86px" }, 50, function () {
            $('.main_button_bar p').text('%69');
        })
        $(".main_button_bar").animate({ width: "87px" }, 200, function () {
            $('.main_button_bar p').text('%70');
        })
        $(".main_button_bar").animate({ width: "88px" }, 100, function () {
            $('.main_button_bar p').text('%72');
        })
        $(".main_button_bar").animate({ width: "90px" }, 100, function () {
            $('.main_button_bar p').text('%74');
        })
        $(".main_button_bar").animate({ width: "100px" }, 200, function () {
            $('.main_button_bar p').text('%83');
        })
        $(".main_button_bar").animate({ width: "100px" }, 500,function(){
            $(".main-animate img, .animate-attack,.animate-run ").css({
            display: 'flex',
            }, animaterun())
        })
        setInterval(function () {
            openbutton()
        }, 15000);
        
    });
    function animaterun(){
        $(".animate-run").animate({ left: 260, }, 2700)
        $(".animate-run").animate({ left: 720, }, 1700)
        $(".animate-run").animate({ left: 730, }, 500, function () {
            $(".animate-attack").animate({ opacity: '1' }, 1000)
        })
        $(".animate-run").animate({ opacity: '0' },700,function(){
        })
        

        $(".animate-run").animate({opacity: '0'}, 2500,function(){
            $(".animate-attack").animate({ left: 10, }, 200,'linear')
            $(".main_button_bar").animate({ width: "110px" }, 200, 'linear')
            $('.main_button_bar p').text('%90');
            $(".animate-attack img").animate({ objectPosition: -27, }, 100);
            $(".animate-attack").animate({ left: 15, }, 1000, 'linear')
            $(".main_button_bar").animate({ width: "115px" }, 1000, 'linear')
            $(".animate-attack img").animate({ objectPosition: -40, }, 1200,function(){
                $(".main_button_bar").animate({ width: "120px" }, 100, 'linear')
                $(".animate-attack").animate({ opacity: '0' })
                $(".main_button_bar").animate({ width: "130px" }, 500)
                $(".animate-run").animate({ opacity: '1' })
                $(".animate-run").animate({left: 1000},2100)
                $(".animate-run").animate({ left: 1800 }, 1000)
                $('.main_button_bar p').text('%100');
            });
            
        })
        
    }
    function openbutton() {
        $('.main').slideUp(1000);
        
    }
        
            
    

});