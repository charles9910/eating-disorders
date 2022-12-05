$(function(){
    $(".coll_body").eq().show();
    $(".Collapsing").click(function(){
        $(this).toggleClass("current").siblings('.Collapsing').removeClass("current");
        $(this).next(".coll_body").slideToggle(500).siblings(".coll_body").slideUp(500);
    });
});
