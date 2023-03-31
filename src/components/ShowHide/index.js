// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, secondName: false}

  hideOrShowFName = () => {
    const {firstName} = this.state
    if (firstName) {
      this.setState({firstName: false})
    } else {
      this.setState({firstName: true})
    }
  }

  hideOrShowSName = () => {
    const {secondName} = this.state
    if (secondName) {
      this.setState({secondName: false})
    } else {
      this.setState({secondName: true})
    }
  }

  render() {
    const {firstName, secondName} = this.state
    return (
      <div className="page_container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards_container">
          <div className="card">
            <button
              onClick={this.hideOrShowFName}
              className="button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstName ? <p className="name_container">Joe</p> : null}
          </div>
          <div className="card">
            <button
              onClick={this.hideOrShowSName}
              className="button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {secondName ? <p className="name_container">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
