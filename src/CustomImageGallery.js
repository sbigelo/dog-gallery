import React, { Component } from 'react'
import styled from "styled-components"
import ReactPlayer from 'react-player'



class CustomImageGallery extends Component {

    constructor(props) {
        super(props)
    }

    handleFavorite = (e) => {
        this.props.favoritePicture(e.target.getAttribute('src'))
        // console.log(e.target.getAttribute('src'))
    }

    render() {
        const myStyle = {
            width: "200px", 
            height: "200px", 
        }
        let allPhotos
        this.props.imgURL.endsWith('mp4') ? allPhotos = <InnerGrid onClick={this.handleFavorite}><ReactPlayer className='react-player' volume='0' playing='true' loop='true' url={this.props.imgURL}  /> </InnerGrid> : allPhotos = <InnerGrid onClick={this.handleFavorite}><img type="video/jpeg" src={this.props.imgURL}></img></InnerGrid>
        

        return(
            <InnerGrid>
                    {allPhotos}
            </InnerGrid>
        )
    }
}

export default CustomImageGallery

const InnerGrid = styled.div`
    flex: 18%;
    padding: 0 4px;
    img {
        vertical-align: middle;
        max-width: 200px;
        min-width: 199px;
        max-height: 200px;
        min-height: 199px;
    };
     div {
        border: 4px solid #E6E6E6;
        vertical-align: middle;
        max-width: 200px;
        min-width: 199px;
        max-height: 200px;
        min-height: 199px;
    }
`

  
