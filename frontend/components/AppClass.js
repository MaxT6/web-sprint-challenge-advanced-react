import React from 'react'

export default class AppClass extends React.Component {
  //state for class App
  state = {
    currentCoordinate1: 2,
    currentCoordinate2: 2,
    totalMoves: 0,
    board: ['', '', '', '', 'B', '', '', '', '',],
    message: '',
    className: "square"
  }

//function for changing state with left button is clicked
  handleLeft = (val) => {
    console.log('board', val)
    if(this.state.board[1] === 'B') {
      this.setState({
        ...this.state,
        board: ['B', '', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[2] === 'B') {
      this.setState({
        ...this.state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
        // className: true
      })
    } else if (this.state.board[5] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[7] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[8] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (
      this.state.board[0] === 'B' ||
      this.state.board[3] === 'B' ||
      this.state.board[6] === 'B'
      ) {
      this.setState({
        ...this.state,
        message: "You can't go left"
      })
    }
  }

//function for changing state with right button is clicked
  handleRight = (val) => {
    console.log('board', val)
    if(this.state.board[0] === 'B') {
      this.setState({
        ...this.state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[1] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[3] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[6] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[7] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (
      this.state.board[2] === 'B' ||
      this.state.board[5] === 'B' ||
      this.state.board[8] === 'B'
      ) {
      this.setState({
        ...this.state,
        message: "You can't go right"
      })
    }
  }

//function for changing state with up button is clicked
  handleUp = (val) => {
    console.log('board', val)
    if(this.state.board[3] === 'B') {
      this.setState({
        ...this.state,
        board: ['B', '', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[5] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 1,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[6] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[7] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[8] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (
      this.state.board[0] === 'B' ||
      this.state.board[1] === 'B' ||
      this.state.board[2] === 'B'
      ) {
      this.setState({
        ...this.state,
        message: "You can't go up"
      })
    }
  }

//function for changing state with down button is clicked
  handleDown = (val) => {
    console.log('board', val)
    if(this.state.board[0] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[1] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[2] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 2,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[3] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        currentCoordinate1: 1,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        currentCoordinate1: 2,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (this.state.board[5] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        currentCoordinate1: 3,
        currentCoordinate2: 3,
        totalMoves: this.state.totalMoves + 1
      })
    } else if (
      this.state.board[6] === 'B' ||
      this.state.board[7] === 'B' ||
      this.state.board[8] === 'B'
      ) {
      this.setState({
        ...this.state,
        message: "You can't go down"
      })
    }
  }

//function for changing state with reset button is clicked
  handleReset = () => {
    this.setState({
      ...this.state,
      board: ['', '', '', '', 'B', '', '', '', '',],
      message: '',
      currentCoordinate1: 2,
      currentCoordinate2: 2,
      totalMoves: 0
    })
  }  

  // changeClass = (val) => {
  //   console.log("CClass", val)
  //   if(val === 'B') {
  //     className="square active"
  //   } else if(val === "") {
  //       className="square"
  //   }
  // }

//Attempting to change class. 
//ative below is logging in nothing for blank squares and B for active square
//can't get class to change yet
  // consoleCheck = (active) => {
  //   console.log('Act2', active)
  // }

  // toggleClass = (active) => {
  //  if(active === 'B') {
  //    this.setState({
  //     ...this.state,
  //     className: "active square"
  //    })
  //  }
  // }

  // handleMoves = (idx) => {
  //   console.log(idx);
  // }

  render() {
    // this was given in project
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.currentCoordinate1}, ${this.state.currentCoordinate2})`}</h3>
          <h3 id="steps">{`You moved ${this.state.totalMoves} times`}</h3>
        </div>
        <div id="grid">
          {this.state.board.map((active, idx) => { //map over state that creates the grid
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
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          {this.state.board.map((val, idx) => {
            return (<button id="left" key={idx} onClick={() => this.handleLeft(val)}>LEFT</button>)
          })}

          {this.state.board.map((val, idx) => {
            return (<button id="up" key={idx} onClick={() => this.handleUp(val)}>UP</button>)
          })}
          {/* <button id="up">UP</button> */}

          {this.state.board.map((val, idx) => {
            return (<button id="right" key={idx} onClick={() => this.handleRight(val)}>RIGHT</button>)
          })}
          {/* <button id="right">RIGHT</button> */}

          {this.state.board.map((val, idx) => {
            return (<button id="down" key={idx} onClick={() => this.handleDown(val)}>DOWN</button>)
          })}
          {/* <button id="down">DOWN</button> */}
          {this.state.board.map((val, idx) => {
            return (<button id="reset" key={idx} onClick={() => this.handleReset(val)}>reset</button>)
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
}



//   } else {
    //     this.setState({
    //       ...this.state,
    //       board: ['', '', '', '', '', '', '', '', '',]
    //   })
    // }

// board[idx] === 2 || 
//           board[idx] === 4 || 
//           board[idx] === 5 || 
//           board[idx] === 7 || 
//           board[idx] === 8 ||