import React, { Component } from 'react'
import styled from "styled-components"
import ReactPlayer from 'react-player'

class CustomImageGallery extends Component {

    handleFavorite = (e) => {
        this.props.favoritePicture(e.target.getAttribute('src'))
    }

    render() {
        const catBegginingURL = 'https://cataas.com/'
        let catPhotos = this.props.imgURL && this.props.imgURL.includes('cat') ? <InnerGrid onClick={this.handleFavorite}><img src={catBegginingURL + this.props.imgURL} alt=''></img></InnerGrid> : null
        let dogPhotos
        if (this.props.imgURL && this.props.imgURL.includes('dog')) { this.props.imgURL.endsWith('mp4') ? dogPhotos = <InnerGrid onClick={this.handleFavorite}><ReactPlayer className='react-player' volume={0} playing={true} loop={true} url={this.props.imgURL} /> </InnerGrid> : dogPhotos = <InnerGrid onClick={this.handleFavorite}><img type="video/jpeg" src={this.props.imgURL} alt=''></img></InnerGrid> }
        return(
            <div>
                {dogPhotos}
                {catPhotos}
            </div>
        )
    }
}
export default CustomImageGallery

const InnerGrid = styled.div`
    flex: 18%;
    padding: 0 0px;
    border: 3px solid #000000;
    margin: 2px;
    img {
        vertical-align: middle;
        max-width: 200px;
        min-width: 200px;
        max-height: 200px;
        min-height: 200px;
    };
     div { 
        vertical-align: middle;
        max-width: 200px;
        min-width: 200px;
        max-height: 200px;
        min-height: 200px;
    }
`


