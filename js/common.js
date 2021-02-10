$(function(){    
    //slider
    $(".btn_source").click(function(){  
        $(this).parents(".template").toggleClass("on").find(".source").slideToggle(200);              
    });

    //메뉴 복사
    $(".btn_copy").click(function(){
        var $temp = $("<textarea>");
        var copyTxt = '';
        
        $("body").append($temp);
        copyTxt = $(this).parents(".template").find("textarea").val();
        $temp.val(copyTxt).select();
        document.execCommand("copy");
        $temp.remove();	 
        alert('Copy Done!');
    });
});