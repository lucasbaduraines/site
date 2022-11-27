var color_order = 0

var intervalColor = window.setInterval(changeColor, 200)


//shitty code, FIX LATER
function changeColor(){
    if (color_order == 0){
        document.getElementById("title").style.color = "blue"
        color_order = 1
        console.log("asd");
    }else{

        if (color_order == 1){
            document.getElementById("title").style.color = "red"
            color_order = 2
            console.log("asdasd");
        }else{
            if (color_order == 2){
                document.getElementById("title").style.color = "green"
                color_order = 0
                console.log(('2weasd'));
            }
        }
    }

}
