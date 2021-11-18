import React, {Component} from 'react'
import CustomImageGallery from './CustomImageGallery'


class App extends Component {
 
  constructor() {
    super()
    this.state = {
      dog: []
    }
  }
 
  handleClick = () => {
      fetch('https://random.dog/woof.json')
      .then(resp => resp.json())
      .then(data => this.setState({
      dog: data
    }))
  }

  render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click</button>
            <CustomImageGallery imgURL={this.state.dog.url} />
        </div>
  )
  }
}

export default App;
