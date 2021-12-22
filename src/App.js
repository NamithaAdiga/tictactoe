import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
          <TicTacToe />
         
    </div>
  );
}
function TicTacToe(){
  const [board, setBoard] = useState(
    [null,null,null,null,null,null,null,null,null]);

    const[isXTurn,setIsXTurn]=useState(true);
let boardcopy = [];
    const handleClick=(index)=>{
      console.log("clicked",index);
       if(board[index]===null){
        boardcopy=[...board];
        boardcopy[index]= isXTurn?"X":"O";
        setBoard(boardcopy);
        setIsXTurn(!isXTurn);
       }
      };
       const [message, setMessage] = useState("Click to start");
       const Refresh  = () => {
           setBoard(Array(9).fill("")); 
           setMessage("Click to start");
           setIsXTurn("X"); 
           } 
           if (boardcopy.indexOf("")=== -1){
             // if no more moves game is draw
             setMessage("DRAW")
             setIsXTurn("");
           } else {
             let nextPlayer = (isXTurn === "X") ? "O" : "X"
            setIsXTurn(nextPlayer); // updating player
             setMessage(`TURN: ${nextPlayer}`)
           } 
    const decideWinner=(board)=>{
      const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i=0; i< lines.length; i++) {
        let [a, b, c] = lines[i];
        //console.log(board[a] === board[b] && board[a] === board[c])
        if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
           console.log("Winner is",board[a])
           return board[a];
        }
    }
};
const winner=decideWinner(board);
       
  return(
    // <><div>
    //   <Message value={message} />
    //   <Board onClick={handleClick} value={board} />
    //   <Refresh onClick={refresh} value={'Refresh'} />
    //    </div>
    <div className='board'>
        {board.map((val, index) => <Gamebox val={val} onPlayerClick={() => handleClick(index)} />
        )}
      </div>
  )

function Gamebox({val,onPlayerClick}){
  // const [val, setVal] = useState(null);
  const styles={color:val==="X"?"green":"red"}
  return(
    <div style={styles} onClick={()=>onPlayerClick()} className='game-box'>
       {val}
    </div>
  );
}
}
export default App;
