var initBoard = [[null,null,null],[null,null,null],[null,null,null]];
    initState = {board: initBoard, previousWho: null};
    updatedState = {board: initState.board, previousWho: 'X'};
//     // box1 = [0,0];
//     // box2 = [1,0];
//     // box3 = [2,0];
//     // box4 = [0,1];
//     // box5 = [1,1];
//     // box6 = [2,1];
//     // box7 = [0,2];
//     // box8 = [1,2];
//     // box9 = [2,2];

function copyBoard(board){
  var newBoard = [];
  
}

function place(updatedState, m, n){
  var newBoard;
  var newPreviousWho = ..;
  var newState = {board: newBoard, previousWho: newPreviousWho};
  return newState;
  // if(state.previousWho === null){
  //   updatedState.board[n][m] = 'X';
  //   return updatedState;
  //
  // }
  if (updatedState.previousWho === 'X'){
    updatedState.previousWho = 'O';
    updatedState.board[n][m] = 'O';
    return updatedState;

  } else if (updatedState.previousWho === 'O'){
    updatedState.previousWho = 'X';
    updatedState.board[n][m] = 'X';
    return updatedState;

  } else {
    throw "Error!";
  }

  return updatedState;
}

function render(updatedState){
  var result = '<table border="1">';

  for (i=0;i<3;i++){
    result = result + '<tr>';
    for (j=0;j<3;j++){
      result = result + '<td>';
      if (updatedState.board[i][j] === null){
        result = result + createButtonStr(updatedState, i, j);
      } else if (updatedState.board[i][j] === 'X'){
        result = result + 'X';
      } else if (updatedState.board[i][j] === 'O'){
        result = result + 'O';
      }
      result = result + '</td>';
    }
    result = result + '</tr>';
  }
  result = result + '</table>';
  return result;
}

function createButtonStr(updatedState, i, j){
  return '<button class="empty-button" onclick="click(updatedState, j, i)"></button>';
}
//execution
function click(updatedState, i,j){
  var newState = place(updatedState, j, i);
  render(newState);
  checkIfThreeInTheLine(newState);
}

/*<table border="1">
  <tr>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
  </tr>
  <tr>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
  </tr>
  <tr>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
    <td>
      '<button class="empty-button" onclick="click()">' + content + "</button>"
    </td>
  </tr>
</table>*/




var html = render(initState);
document.querySelector("#board").innerHTML = html;


//

function vThreeInTheLine(board){
  for (i=0;i<3;i++){
    var box1 = [i,0];
        box2 = [i,1];
        box3 = [i,2];

    if (box1 === box2 && box2 === box3){
      return true;
    }
  }
  return false;
}

function hThreeInTheLine(board){
  for (i=0;i<3;i++){
    var box1 = [0,i];
        box2 = [1,i];
        box3 = [2,i];

    if (box1 === box2 && box2 === box3){
      return true;
    }
  }
}

function dThreeInTheLine(board){
  var box1 = [0,0];
      box2 = [1,1];
      box3 = [2,2];
      box4 = [0,2];
      box5 = [1,1];
      box6 = [2,0];

  if ((box1 === box2 && box2 === box3) || (box4 === box5 && box5 === box6)){
     return true;
  }
}

function checkIfThreeInTheLine(updatedState){
  if (vThreeInTheLine(updatedState) || hThreeInTheLine(updatedState) || dThreeInTheLine(updatedState)){
    console.log("Congrats, you won!");
  }
}
