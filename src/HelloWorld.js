// props
// import React, { Component } from 'react'
// import './App.css'

// class HelloWorld extends Component {
//   render() {
//     return (
//       <div className="warna">
//         Halo {this.props.depan} {this.props.belakang}
//       </div>
//     )
//   }
// }

// state
import React, { Component } from 'react'
import './App.css'

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = { salam: 'Halo ' }
  }
  salamkan = () => {
    this.setState({ salam: 'salam Untukmu ' })
  }
  render() {
    return (
      <div className="warna">
        {this.state.salam}
        {this.props.depan} {this.props.belakang}
        <br />
        <button onClick={this.salamkan}>Salam!</button>
      </div>
    )
  }
}

export default HelloWorld
