var board = [[a,a,a],[a,a,a],[a,a,a]];
//grouping;
var midBoxSideLine = [[1,0],[0,1],[2,1],[1,2]];
var cornerBox = [[0,0],[2,0],[0,2],[2,2]];
var coreBox = [1,1];

function place(board, m, n, item){
  board[n][m] = item;

  var placedArr = [];
  placedArr[0] = m;
  placedArr[1] = n;
}

//checking methods;
function checkVerticalAndHorizontal(item, m, n){
  var neighborArr1 = [m,0];
      neighborArr2 = [m,1];
      neighborArr3 = [m,2];
      neighborArr4 = [0,n];
      neighborArr5 = [1,n];
      neighborArr6 = [2,n];
  if (neighborArr1 === item && neighborArr2 === item && neighborArr3 === item){
    console.log("Congrats! " + item + " won!" );
  } else if (neighborArr4 === item && neighborArr5 === item && neighborArr6 === item){
    console.log("Congrats! " + item + " won!" );
  } else {
    //?????
  }
}

function checkDiagonal1(item, m, n){
  if (m === n){
    var neighborArr1 = [0,0];
        neighborArr2 = [1,1];
        neighborArr3 = [2,2];
    if (neighborArr1 === item && neighborArr2 === item && neighborArr3 === item){
          console.log("Congrats! " + item + " won!" );
        } else{
          //??????
        }
   } else {
     var neighborArr4 = [0,2];
         neighborArr5 = [1,1];
         neighborArr6 = [2,0];

      if (neighborArr4 === item && neighborArr5 === item && neighborArr6 === item){
          console.log("Congrats! " + item + " won!" );
         } else {
           //?????
         }
   }
}

function checkDiagonal2 (item, m, n){
    var neighborArr1 = [0,0];
        neighborArr2 = [1,1];
        neighborArr3 = [2,2];
    if (neighborArr1 === item && neighborArr2 === item && neighborArr3 === item){
          console.log("Congrats! " + item + " won!" );
        } else{
          //??????
        }

     var neighborArr4 = [0,2];
         neighborArr5 = [1,1];
         neighborArr6 = [2,0];

      if (neighborArr4 === item && neighborArr5 === item && neighborArr6 === item){
          console.log("Congrats! " + item + " won!" );
         } else {
           //?????
         }
}


function checkMidBoxSideLine(item, m, n){
  checkVerticalAndHorizontal(item, m, n);
}

function checkCornerBox (item, m, n){
  checkVerticalAndHorizontal(item, m, n);
  checkDiagonal1(item, m, n);
}

function checkCoreBox (item, m, n){
  checkVerticalAndHorizontal(item, m, n);
  checkDiagonal2(item, m, n);
}

function checkIfThreeInTheLine(item, m, n){

  if (midBoxSideLine.indexOf(placedArr) > -1){
    checkMidBoxSideLine(item, m, n);
  } else if (cornerBox.indexOf(placedArr) > -1){
    checkCornerBox(item, m, n);
  } else if (coreBox.indexOf(placedArr)> -1){
    checkCoreBox(item, m, n);
  } else {
    throw "Error!";
  }
}
