import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {button: 'Subscribe'}

  onSubscribe = () => {
    const {button} = this.state
    if (button === 'Subscribe') {
      this.setState({button: 'Subscribed'})
    } else {
      this.setState({button: 'Subscribe'})
    }
  }

  render() {
    const {button} = this.state
    return (
      <div className="bgContainer">
        <div className="card">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>

          <button className="button" type="button" onClick={this.onSubscribe}>
            {button}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
