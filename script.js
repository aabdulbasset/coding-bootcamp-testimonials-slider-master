var defaultText = $(".article-text").text()
var defaultName = $(".name").text()
var defaultJob = $(".job").text()
$(".button").click(function(){

    if($(this).attr("class") == "next-button button"){

        console.log(defaultText)
        console.log($(".person-image"))
        $(".person-image")[0].src = "../slider/image-tanya.jpg"
        $(".article-text").text("“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”")
        $(".name").text("Tanya Sinclair")
        $(".job").text("UX Engineer")
    }else{
        $(".person-image")[0].src = "../slider/image-john.jpg"
        $(".article-text").text(defaultText)
        $(".name").text(defaultName)
        $(".job").text(defaultJob)
    }
})

function changephoto(){
    console.log("Clicked")
}