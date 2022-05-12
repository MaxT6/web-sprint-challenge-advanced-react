import React, {useState} from 'react'

export default function AppFunctional(props) {

  const [state, setState] = useState({
    currentCoordinate1: 2,
    currentCoordinate2: 2,
    totalMoves: 0,
    board: ['', '', '', '', 'B', '', '', '', '',],
    message: '',
    className: "square"
  })

  //function for changing state with left button is clicked
  const handleLeft = (val) => {
    console.log('board', val)
    if(state.board[1] === 'B') {
      setState({
        ...state,
        board: ['B', '', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[2] === 'B') {
      setState({
        ...state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[4] === 'B') {
      setState({
        ...state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
        // className: true
      })
    } else if (state.board[5] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[7] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[8] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (
      state.board[0] === 'B' ||
      state.board[3] === 'B' ||
      state.board[6] === 'B'
      ) {
      setState({
        ...state,
        message: "You can't go left"
      })
    }
  }

  //function for changing state with right button is clicked
  const handleRight = (val) => {
    console.log('board', val)
    if(state.board[0] === 'B') {
      setState({
        ...state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[1] === 'B') {
      setState({
        ...state,
        board: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[3] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[4] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[6] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[7] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (
      state.board[2] === 'B' ||
      state.board[5] === 'B' ||
      state.board[8] === 'B'
      ) {
      setState({
        ...state,
        message: "You can't go right"
      })
    }
  }

  //function for changing state with up button is clicked
  const handleUp = (val) => {
    console.log('board', val)
    if(state.board[3] === 'B') {
      setState({
        ...state,
        board: ['B', '', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[4] === 'B') {
      setState({
        ...state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[5] === 'B') {
      setState({
        ...state,
        board: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 1,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[6] === 'B') {
      setState({
        ...state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[7] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[8] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (
      state.board[0] === 'B' ||
      state.board[1] === 'B' ||
      state.board[2] === 'B'
      ) {
      setState({
        ...state,
        message: "You can't go up"
      })
    }
  }

  //function for changing state with down button is clicked
  const handleDown = (val) => {
    console.log('board', val)
    if(state.board[0] === 'B') {
      setState({
        ...state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[1] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[2] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 2,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[3] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[4] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (state.board[5] === 'B') {
      setState({
        ...state,
        board: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 3,
        totalMoves: state.totalMoves + 1
      })
    } else if (
      state.board[6] === 'B' ||
      state.board[7] === 'B' ||
      state.board[8] === 'B'
      ) {
      setState({
        ...state,
        message: "You can't go down"
      })
    }
  }

  //function for changing state with reset button is clicked
  const handleReset = () => {
    setState({
      ...state,
      board: ['', '', '', '', 'B', '', '', '', '',],
      message: '',
      currentCoordinate1: 2,
      currentCoordinate2: 2,
      totalMoves: 0
    })
  }  



  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
          <h3 id="coordinates">{`Coordinates (${state.currentCoordinate1}, ${state.currentCoordinate2})`}</h3>
          <h3 id="steps">{`You moved ${state.totalMoves} times`}</h3>
        </div>
        <div id="grid">
          {state.board.map((active, idx) => { //map over state that creates the grid
            return (
              <div 
                key={idx}
                className={`${active ? 'active square' : 'square'}`}> 
                  {active}
                  {console.log('active', active)}
            </div>)
          })}
          {/* <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square active">B</div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div> */}
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          {state.board.map((val, idx) => {
            return (<button id="left" key={idx} onClick={() => handleLeft(val)}>LEFT</button>)
          })}

          {state.board.map((val, idx) => {
            return (<button id="up" key={idx} onClick={() => handleUp(val)}>UP</button>)
          })}
          {/* <button id="up">UP</button> */}

          {state.board.map((val, idx) => {
            return (<button id="right" key={idx} onClick={() => handleRight(val)}>RIGHT</button>)
          })}
          {/* <button id="right">RIGHT</button> */}

          {state.board.map((val, idx) => {
            return (<button id="down" key={idx} onClick={() => handleDown(val)}>DOWN</button>)
          })}
          {/* <button id="down">DOWN</button> */}
          {state.board.map((val, idx) => {
            return (<button id="reset" key={idx} onClick={() => handleReset(val)}>reset</button>)
          })}
          {/* <button id="reset">reset</button> */}
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
    </div>
  )
}
