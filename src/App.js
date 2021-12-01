import React, {Component} from 'react'
import CustomImageGallery from './CustomImageGallery'
import styled from 'styled-components'
import FavoritedImages from './FavoritedImages'


class App extends Component {

    state = {
      dog: [], 
      favoritedImages: []
    }
 
 componentDidMount() {
     const num = 6
      for(let i = 0; i < num; i++) { 
      fetch('https://random.dog/woof.json')
      .then(resp => resp.json())
      .then(data => this.setState({
      dog: [...this.state.dog, data]
    }))
    }
  }

  handleClick = () => {
    this.setState({
      dog: []
    })
    const num = 6
    for (let i = 0; i < num; i++) {
      fetch('https://random.dog/woof.json')
        .then(resp => resp.json())
        .then(data => this.setState({
          dog: [...this.state.dog, data]
    }))
  }
  }

  handleFavorite = (e) => {
    if(!this.state.favoritedImages.includes(e)) {
    this.setState({
      favoritedImages: [...this.state.favoritedImages, e]
    })
    }
    console.log(e)
  }
 

  render() {
    let dogLoad = this.state.dog.map(doggo => <CustomImageGallery  imgURL={doggo.url} favoritePicture={this.handleFavorite}/>)

  let allFavoritedPics = this.state.favoritedImages.map(pic => <FavoritedImages pic={pic} />)

      return (
        <div>
          <LoadMoreDogsButton onClick={this.handleClick}>Load More Dogs!</LoadMoreDogsButton>
          <OuterGrid>{dogLoad}</OuterGrid>
          {allFavoritedPics}
  
        </div>
  )
  }
}

export default App;

const OuterGrid = styled.div`
display: flex;
flex-wrap: wrap;
padding: 25px;
`
const LoadMoreDogsButton = styled.button`
content-align: center;
`

// flex: 18 %;
// padding: 0 4px;
// img {
//   vertical - align: middle;
//   max - width: 200px;
//   min - width: 199px;
//   max - height: 200px;
//   min - height: 199px;
// };
// div {
//   border: 4px solid #E6E6E6;
//   vertical - align: middle;
//   max - width: 200px;
//   min - width: 199px;
//   max - height: 200px;
//   min - height: 199px;
// }