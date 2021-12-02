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
     const num = 10
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
    const num = 10
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
    } else {
      alert(`Can't add that twice!`)
    }
  }
 

  render() {
    let dogLoad = this.state.dog.map(doggo => <CustomImageGallery  imgURL={doggo.url} favoritePicture={this.handleFavorite}/>)

  let allFavoritedPics = this.state.favoritedImages.map(pic => <FavoritedImages pic={pic} />)

      return (
          <div>
            <AppHeader>Dog Gallery</AppHeader>
            <TopText>Click on any picture to put it into your favorite collection!</TopText>
            <LoadMoreDogsButton onClick={this.handleClick}>Load More Dogs!</LoadMoreDogsButton>
            <OuterGrid>{dogLoad}</OuterGrid>
            <TopText>Favorites:</TopText>
          <OuterGrid>{allFavoritedPics}</OuterGrid>
          </div>
  )
  }
}

export default App;

const TopText = styled.h1`
font-size: 25px;
text-align: center;
`

const OuterGrid = styled.div`
display: flex;
flex-wrap: wrap;
padding: 25px;
`
const LoadMoreDogsButton = styled.button`
    margin: 0 auto;
    display: block;
`
const AppHeader = styled.h1`
  text-align: center;
  font-size: 50px;
`