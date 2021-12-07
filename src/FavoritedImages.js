import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components"

class FavoritedImages extends Component {

handleDelete = (e) => {
    this.props.favoriteRemove(e.target.getAttribute('src'))
}

   render() {
       let card
       this.props.pic.endsWith('mp4') ? card = <div onClick={this.handleDelete} className='innerGrid' ><ReactPlayer volume='0' playing='true' loop='true' url={this.props.pic} style='' /> </div> : card = <div onClick={this.handleDelete} className='innerGrid'><img type="video/jpeg" src={this.props.pic}></img></div>
    return(
        <InnerGrid>
            {card}
        </InnerGrid>
    )
   }
}

export default FavoritedImages

const InnerGrid = styled.div`
    flex: 18%;
    padding: 0 4px;
    img {
        margin-top: 8px;
        vertical-align: middle;
        max-width: 200px;
        min-width: 200px;
        max-height: 200px;
        min-height: 200px;
    }
    div {
        margin-top: 8px;
        vertical-align: middle;
        max-width: 200px;
        min-width: 200px;
        max-height: 200px;
        min-height: 200px;
    }
`