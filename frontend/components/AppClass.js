import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:9000/api/result'

export default class AppClass extends React.Component {
  //state for class App
  state = {
    x: 2,
    y: 2,
    steps: 0,
    board: ['', '', '', '', 'B', '', '', '', '',],
    message: '',
    className: "square",
    email: '',
  }

//function for changing state with left button is clicked
  handleLeft = (val) => {
    console.log('board', val)
    if(this.state.board[1] === 'B') {
      this.setState({
        ...this.state,
        board: ['B', '', '', '', '', '', '', '', '',],
        message: '',
        x: 1,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[2] === 'B') {
      this.setState({
        ...this.state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        x: 2,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        x: 1,
        y: 2,
        steps: this.state.steps + 1
        // className: true
      })
    } else if (this.state.board[5] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[7] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        x: 1,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[8] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        x: 2,
        y: 3,
        steps: this.state.steps + 1
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
        x: 2,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[1] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        x: 3,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[3] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        x: 3,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[6] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        x: 2,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[7] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        x: 3,
        y: 3,
        steps: this.state.steps + 1
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
        x: 1,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', 'B', '', '', '', '', '', '', '',],
        message: '',
        x: 2,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[5] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', 'B', '', '', '', '', '', '',],
        message: '',
        x: 3,
        y: 1,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[6] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', 'B', '', '', '', '', '',],
        message: '',
        x: 1,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[7] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[8] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        x: 3,
        y: 2,
        steps: this.state.steps + 1
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
        x: 1,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[1] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', 'B', '', '', '', '',],
        message: '',
        x: 2,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[2] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', 'B', '', '', '',],
        message: '',
        x: 3,
        y: 2,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[3] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', 'B', '', '',],
        message: '',
        x: 1,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[4] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', 'B', '',],
        message: '',
        x: 2,
        y: 3,
        steps: this.state.steps + 1
      })
    } else if (this.state.board[5] === 'B') {
      this.setState({
        ...this.state,
        board: ['', '', '', '', '', '', '', '', 'B',],
        message: '',
        x: 3,
        y: 3,
        steps: this.state.steps + 1
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
      x: 2,
      y: 2,
      steps: 0,
      email: '',
    })
  }  


  

  //axios get
  // componentDidMount() {
  //   axios.get(URL)
  //   .then(res => {
  //     console.log("GET RES", res)
  //   })
  // }

    


  handleChanges = e => {
    this.setState({
      ...this.state,
      // x: this.state.x,
      // y: this.state.y,
      // steps: this.state.steps,
      email: e.target.value
    })
    console.log('first x', this.state.x)
    console.log('first y', this.state.y)
    console.log('first steps', this.state.steps)
    console.log('first email', e.target.value)
  }

  handleSubmit = e => {
    e.preventDefault();
    // if(this.state.email === "") {
    //   this.setState({
    //     ...this.state,
    //     message: "Ouch: email is required"
    //   })
    // } else{
        axios.post(URL, {
        x: this.state.x,
        y: this.state.y,
        steps: this.state.steps,
        email: this.state.email,
        })
      .then(res => {
      // console.log("res", res)
      this.setState({
        ...this.state,
        message: res.data.message
        })
      })
      .catch(err => {
        //console.error(err.response.data.message, "error")
        this.setState({
          ...this.state,
          message: err.response.data.message
          })
      })
      this.setState({
      ...this.state,
      email: ''
      })
    // }
  }

  moveMessage = () => {
    if(this.state.steps === 1) {
      return(
        `You moved ${this.state.steps} time`
      )
    } else {
      return `You moved ${this.state.steps} times`
    }
  }

  // axios submiter
  // submitState = (e, item1, item2, item3, item4) => {
  //   axios.post(URL, {
  //     x: item1,
  //     y: item2,
  //     steps: item3,
  //     email: item4,
  //   })
  //   .then(res => {
  //     // console.log("res", res)
  //     this.setState({
  //       ...this.state,
  //       message: res.data.message
  //     })
  //   })
  //   console.log("x", item1)
  //   console.log("y", item2)
  //   console.log("steps", item3)
  //   console.log("email", item4)
  //   //console.log("state of X", x, "state of Y", y, "state of steps", steps, "state of email", email) 
  // }



  render() {
    // this was given in project
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{`Coordinates (${this.state.x}, ${this.state.y})`}</h3>
          <h3 id="steps">{this.moveMessage(this.state.steps)}</h3>
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
        <form onSubmit={this.handleSubmit}>
          <input 
            id="email" 
            value={this.state.email}
            type="email" 
            placeholder="type email"
            onChange={this.handleChanges}>
            </input>
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