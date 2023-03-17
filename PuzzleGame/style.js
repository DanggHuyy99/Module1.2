const win_3 = "http://127.0.0.1:5501/PuzzleGame/img1/1.3.pnghttp://127.0.0.1:5501/PuzzleGame/img2/2.3.pnghttp://127.0.0.1:5501/PuzzleGame/img3/3.3.pnghttp://127.0.0.1:5501/PuzzleGame/img4/4.3.pnghttp://127.0.0.1:5501/PuzzleGame/img5/5.3.png"
const win_2 = "http://127.0.0.1:5501/PuzzleGame/img1/1.2.pnghttp://127.0.0.1:5501/PuzzleGame/img2/2.2.pnghttp://127.0.0.1:5501/PuzzleGame/img3/3.2.pnghttp://127.0.0.1:5501/PuzzleGame/img4/4.2.pnghttp://127.0.0.1:5501/PuzzleGame/img5/5.2.png"
const win_1 = "http://127.0.0.1:5501/PuzzleGame/img1/1.1.pnghttp://127.0.0.1:5501/PuzzleGame/img2/2.1.pnghttp://127.0.0.1:5501/PuzzleGame/img3/3.1.pnghttp://127.0.0.1:5501/PuzzleGame/img4/4.1.pnghttp://127.0.0.1:5501/PuzzleGame/img5/5.1.png"
function change_1(){
    let random = Math.ceil(Math.random()*3);
    let image = `1.${random}.png`;
        document.getElementById("img_1").src=`img1/${image}`;

    let check = document.getElementById('img_1').src + 
                document.getElementById('img_2').src + 
                document.getElementById('img_3').src + 
                document.getElementById('img_4').src + 
                document.getElementById('img_5').src ;   

    if (win_1 == check || win_2 == check || win_3 == check){
        document.getElementById('img_1').classList.add('win');
        document.getElementById('img_2').classList.add('win');
        document.getElementById('img_3').classList.add('win');
        document.getElementById('img_4').classList.add('win');
        document.getElementById('img_5').classList.add('win');
    } else {
        document.getElementById('img_1').classList.remove('win');
        document.getElementById('img_2').classList.remove('win');
        document.getElementById('img_3').classList.remove('win');
        document.getElementById('img_4').classList.remove('win');
        document.getElementById('img_5').classList.remove('win');
    }           
}
function change_2(){
    let random = Math.ceil(Math.random()*3);
    let image = `2.${random}.png`;
        document.getElementById("img_2").src=`img2/${image}`;

    let check = document.getElementById('img_1').src + 
                document.getElementById('img_2').src + 
                document.getElementById('img_3').src + 
                document.getElementById('img_4').src + 
                document.getElementById('img_5').src ;   

    if (win_1 == check || win_2 == check || win_3 == check){
        document.getElementById('img_1').classList.add('win');
        document.getElementById('img_2').classList.add('win');
        document.getElementById('img_3').classList.add('win');
        document.getElementById('img_4').classList.add('win');
        document.getElementById('img_5').classList.add('win');
    } else {
        document.getElementById('img_1').classList.remove('win');
        document.getElementById('img_2').classList.remove('win');
        document.getElementById('img_3').classList.remove('win');
        document.getElementById('img_4').classList.remove('win');
        document.getElementById('img_5').classList.remove('win');
    }  
}
function change_3(){
    let random = Math.ceil(Math.random()*3);
    let image = `3.${random}.png`;
        document.getElementById("img_3").src=`img3/${image}`;

    let check = document.getElementById('img_1').src + 
                document.getElementById('img_2').src + 
                document.getElementById('img_3').src + 
                document.getElementById('img_4').src + 
                document.getElementById('img_5').src ;   
    if (win_1 == check || win_2 == check || win_3 == check){
        document.getElementById('img_1').classList.add('win');
        document.getElementById('img_2').classList.add('win');
        document.getElementById('img_3').classList.add('win');
        document.getElementById('img_4').classList.add('win');
        document.getElementById('img_5').classList.add('win');
    } else {
        document.getElementById('img_1').classList.remove('win');
        document.getElementById('img_2').classList.remove('win');
        document.getElementById('img_3').classList.remove('win');
        document.getElementById('img_4').classList.remove('win');
        document.getElementById('img_5').classList.remove('win');
    }  
}
function change_4(){
    let random = Math.ceil(Math.random()*3);
    let image = `4.${random}.png`;
        document.getElementById("img_4").src=`img4/${image}`;

    let check = document.getElementById('img_1').src + 
                document.getElementById('img_2').src + 
                document.getElementById('img_3').src + 
                document.getElementById('img_4').src + 
                document.getElementById('img_5').src ;   
    if (win_1 == check || win_2 == check || win_3 == check){
        document.getElementById('img_1').classList.add('win');
        document.getElementById('img_2').classList.add('win');
        document.getElementById('img_3').classList.add('win');
        document.getElementById('img_4').classList.add('win');
        document.getElementById('img_5').classList.add('win');
    } else {
        document.getElementById('img_1').classList.remove('win');
        document.getElementById('img_2').classList.remove('win');
        document.getElementById('img_3').classList.remove('win');
        document.getElementById('img_4').classList.remove('win');
        document.getElementById('img_5').classList.remove('win');
    }  
}

function change_5(){
    let random = Math.ceil(Math.random()*3);
    let image = `5.${random}.png`;
        document.getElementById("img_5").src=`img5/${image}`

    let check = document.getElementById('img_1').src + 
                document.getElementById('img_2').src + 
                document.getElementById('img_3').src + 
                document.getElementById('img_4').src + 
                document.getElementById('img_5').src ;

    if (win_1 == check || win_2 == check || win_3 == check){
        document.getElementById('img_1').classList.add('win');
        document.getElementById('img_2').classList.add('win');
        document.getElementById('img_3').classList.add('win');
        document.getElementById('img_4').classList.add('win');
        document.getElementById('img_5').classList.add('win');
    } else {
        document.getElementById('img_1').classList.remove('win');
        document.getElementById('img_2').classList.remove('win');
        document.getElementById('img_3').classList.remove('win');
        document.getElementById('img_4').classList.remove('win');
        document.getElementById('img_5').classList.remove('win');
    }

}
