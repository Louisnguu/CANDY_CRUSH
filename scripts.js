var Keo=["Red", "Yellow", "Green", "Blue", "Orange", "Purple"];
var board =[] ;
var row, col, score=0;
row=Number(document.getElementById("rows").value);
col=Number(document.getElementById("colums").value);
function START()
{
    window.onload = function() 
    {
        startGame(); //chứa các khỏi tạo cho game
        window.setInterval(function () 
        {
            Pha_Keo(); //phá kẹo
            Dichuyen_Keo(); //di chuyển kẹo
            Tao_Keo(); //tạo ra kẹo
        }, 100);
    }
    function randomKeo() //sinh giá trị ngẫu nhiên trong mảng Keo[]
    {
        return Keo[Math.floor(Math.random() * Keo.length)]; //0 - 5.99
    }
    
    function startGame() 
    {
        for (let r = 0; r < row ; r++) {
            let hang = [];
            for (let c = 0; c < col ; c++) {
                // Tạo mảng 2 chiều 
                // set up vị trí kẹo 
                // VD : img= "0-0" hoặc img= "3-2" 
                let title = document.createElement("img");
                title.id = r.toString() + "-" + c.toString() ;
                // src = "./images/red.png"
                title.src = "./images/" + randomKeo() + ".png" ;

                document.getElementById("board").append(title);
                hang.push(title);
            }
            board.push(hang);
        }
        console.log(board);
    }
    
}
