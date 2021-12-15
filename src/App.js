import React, {Component} from 'react'
import CustomImageGallery from './CustomImageGallery'
import styled from 'styled-components'
import FavoritedImages from './FavoritedImages'
// import { Routes, Route } from 'react-router-dom'
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";


class App extends Component {

    state = {
      dog: [], 
      favoritedImages: [],
      userDetails: {},
      isUserLoggedIn: false,
      cat: []
    }
 
  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
  };

  logout = () => {
    alert("Successfully Logged Out")
    this.setState({ isUserLoggedIn: false })
  };

 componentDidMount() {
     const num = 12
      for(let i = 0; i < num; i++) { 
      fetch('https://random.dog/woof.json')
      .then(resp => resp.json())
      .then(data => this.setState({
      dog: [...this.state.dog, data]
    }))
    }
  }

  handleLoadCats = () => {
    const URL = 'https://cataas.com/'
    const num = 12
    this.setState({
      dog: [],
      cat: []
    })
    for (let i = 0; i < num; i++) {
      fetch(URL + 'cat?json=true')
      .then(resp => resp.json())
      .then(data => this.setState({
        cat: [...this.state.cat, data]
      }))
    }
  }
  
 
  handleClick = () => {
    this.setState({
      dog: [],
      cat: []
    })
    const num = 12
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

  handleRemoveFavorite = (e) => {
    console.log(e)
    this.setState({
      favoritedImages: this.state.favoritedImages.filter(favorite => favorite !== e)
    })
  }


 

  render() {
    let dogLoad = this.state.dog.map(doggo => <CustomImageGallery  imgURL={doggo.url} favoritePicture={this.handleFavorite}/>)

    let allFavoritedPics = this.state.favoritedImages.map(pic => <FavoritedImages pic={pic} favoriteRemove={this.handleRemoveFavorite} />)

    let catLoad = this.state.cat.map(cats => <CustomImageGallery catimgURL={cats.url} favoritePicture={this.handleFavorite} />)

      return (
          <div>
          {this.state.isUserLoggedIn && (<div> <WelcomingHeader1>
            Welcome {this.state.userDetails.givenName}{" "}
            {this.state.userDetails.familyName}
          </WelcomingHeader1>
            <WelcomingHeader2><i>{this.state.userDetails.email}</i></WelcomingHeader2>
            <GoogleLogout
              render={renderProps => (
                <LogOutButton
                  className="logout-button"
                  onClick={renderProps.onClick}
                >Log Out</LogOutButton>
              )}
              onLogoutSuccess={this.logout}
            />
            <HeaderBackground>
              <AppHeader>Dog Gallery</AppHeader>
              <SubAppHeader>...Now With Cats!</SubAppHeader>
              <HeaderText>Click on any picture to put it into your favorite collection!</HeaderText>
            </HeaderBackground>  
              <LoadMoreDogsButton onClick={this.handleClick}>Load    More Dogs!</LoadMoreDogsButton>
              <button onClick={this.handleLoadCats} >Load Cats</button>
                <OuterGrid>{dogLoad}</OuterGrid>
                <OuterGrid>{catLoad}</OuterGrid>
              <FavoriteBackground>
                <TopText>Favorites:</TopText>
                <FavoriteText>Click on any image to remove it</FavoriteText>
                <OuterGrid>{allFavoritedPics}</OuterGrid>
              </FavoriteBackground>
            </div>)}
          {!this.state.isUserLoggedIn && ( 
            <LogInBackground>
              <LoginPageAppHeader>Dog Gallery</LoginPageAppHeader>
            <GoogleLogin 
              clientId='696908995235-ao2l0oj9d8espfkfm45aucej8jno3ur8.apps.googleusercontent.com'
              render={renderProps => (
                <LogInButton
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >Log in with Google</LogInButton>
              )}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
            />
            </LogInBackground>
         )} 
          </div>
  )
  }
}

export default App;

const SubAppHeader = styled.h3`
  color: white;
  padding: 0 0 0 25px;
`

const HeaderBackground = styled.div`
  background-color: #458a94;
  display: block;
`

const HeaderText = styled.h2`
  color: white;
  padding: 25px;
  
`

const FavoriteText = styled.h3`
  color: white;
  padding: 0px 0px 0px 25px;
`

const FavoriteBackground = styled.div`
  display: block;
  background-color: #458a94;
  margin-bottom: 15px;
`

const WelcomingHeader1 = styled.div`
  text-align: right;
  top: 6%;
`
const WelcomingHeader2 = styled.div`
  text-align: right;
  top: 8%;
`

const LogOutButton = styled.button`
  position: absolute;  
  right: 10px;
  top: 70px;
  color: #fff;
  background-color: #0000FF;
  border-radius: 4px;   
  padding: 12px 12px;  
  border: 1px solid #0000FF;
  width: 10%;
  min-width: 100px;
  max-width: 200px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`

const LogInButton = styled.button`
  position: fixed;
  left: 38%;
  top: 26%;
  color: #fff;
  background-color: #0000FF;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #0000FF;
  width:20%;
  min-width: 20%;
  max-width: 200px;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`

const TopText = styled.h1`
  font-size: 25px;
  color: white;
  padding: 25px 25px 0px 5px;
`

const OuterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;
`
const LoadMoreDogsButton = styled.button`
  position: relative;
  left: 43%;
  top: 25.5%;
  display: block;
  min-width: 150px;
  color: #fff;
  background-color: #0000FF;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #0000FF;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const AppHeader = styled.h1`
  text-align: left;
  font-size: 50px;
  margin: 25px;
  color: white;
`

const LoginPageAppHeader = styled.div`
  position: fixed;
  left: 35%;
  top: 5%;
  width: 25%;
  text-align: center;
  font-size: 50px;
  border-radius: 4px;   
  padding: 12px 12px;
`


const LogInBackground = styled.div`
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
`