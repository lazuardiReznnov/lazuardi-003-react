// import logo from './logo.svg'
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }
// import React, { Component } from 'react'
// import HelloWorld from './HelloWorld'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <HelloWorld depan="naila" belakang="Lazuardi" />
//         <HelloWorld depan="fauzia" belakang="Lazuardi" />
//       </div>
//     )
//   }
// }

// event
// import React, { Component } from 'react'
// class App extends Component {
//   // inisialisasi state
//   constructor() {
//     super()
//     // Data awal state
//     this.state = { data: '' }
//   }
//   // membuat fungsi handle change
//   handleChange = (event) => {
//     this.setState({ data: event.target.value })
//   }
//   render() {
//     return (
//       <div className="col-5 p-4">
//         <input
//           className="form-control"
//           type="text"
//           placeholder="isi data"
//           onChange={this.handleChange}
//         />
//         <h3>{this.state.data}</h3>
//       </div>
//     )
//   }
// }

// akses Json
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      siswa: [
        {
          id: 1,
          nama: 'Lazuardi',
        },
        {
          id: 2,
          nama: 'sueb',
        },
      ],
    }
  }
  render() {
    return (
      <div>
        {this.state.siswa.map((dinamis, key) => (
          <div>
            <h3>
              {dinamis.id}. {dinamis.nama}
            </h3>
          </div>
        ))}
      </div>
    )
  }
}
export default App
