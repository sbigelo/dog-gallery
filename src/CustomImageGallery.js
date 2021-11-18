import React, { Component } from 'react'
import styled from "styled-components"
import ImageGallery from 'react-image-gallery';

class CustomImageGallery extends Component {



    render() {
        return(
            <PhotoWrap>
                <img width='400' height='400' src={this.props.imgURL}></img>
                {/* <ImageGallery 
                infinite={false}
                items={this.props.imgURL}
                thumbnailPosition={'left'}
                
                /> */}
            </PhotoWrap>
        )
    }
}

export default CustomImageGallery

const PhotoWrap = styled.div`

`