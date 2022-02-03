$(".button1").click(function() {
    var storequestion1 = $(".answer1").val();
    var storequestion2 = $(".answer2").val();
   
    if( storequestion2 === "Hopeful") {
        $(".Naruto-Picture").show();
        $(".Sasuke-Picture").hide();
 		$(".Shikarmaru-Picture").hide();
        $(".Rocklee-Picture").hide();
        $(".finalanswer").text("You are feelng " + storequestion1 + " out of 10 today and you are " + storequestion2 + " which means that your the character Naruto.");} 
    
    else if( storequestion2 === "Rebellious") {
        $(".Sasuke-Picture").show();
        $(".Naruto-Picture").hide();
 		$(".Shikarmaru-Picture").hide();
        $(".Rocklee-Picture").hide();
        $(".finalanswer").text("You are feelng " + storequestion1 + " out of 10 today and you are " + storequestion2 + " which means that your the character Sasuke.");} 
        
    else if( storequestion2 === "Smart") {
        $(".Shikamaru-Picture").show();
        $(".Sasuke-Picture").hide();
 		$(".Naruto-Picture").hide();
        $(".Rocklee-Picture").hide();
        $(".finalanswer").text("You are feelng " + storequestion1 + " out of 10 today and you are " + storequestion2 + " which means that your the character Shikamaru.");} 
    
    else if( storequestion2 === "Hardworking") {
        $(".Rocklee-Picture").show();
        $(".Sasuke-Picture").hide();
 		$(".Shikarmaru-Picture").hide();
        $(".Naruto-Picture").hide();
        $(".finalanswer").text("You are feelng " + storequestion1 + " out of 10 today and you are " + storequestion2 + " which means that your the character Rock Lee.");} 
                    
    else { 
     $("img").hide();
     $(".mapofnaruto").show();
   	 $(".finalanswer").text("Try again by refreshing the page and make sure the starting letter is capitalized.");
}
});

	var count = 0;
$(".button1").click(function() {
    count++;
    $(".counter").text("You have tried " + count + " times.");
});

