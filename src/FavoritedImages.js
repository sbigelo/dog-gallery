import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components"

class FavoritedImages extends Component {

handleDelete = (e) => {
    this.props.favoriteRemove(e.target.getAttribute('src'))
}

   render() {
       let card
       this.props.pic.endsWith('mp4') ? card = <InnerGrid onClick={this.handleDelete} className='innerGrid' ><ReactPlayer volume={0} playing={true} loop={true} url={this.props.pic} style={{}} /> </InnerGrid> : card = <InnerGrid onClick={this.handleDelete} className='innerGrid'><img type="video/jpeg" src={this.props.pic} alt=''></img></InnerGrid>
    return(
        <div>
            {card}
        </div>
    )
   }
}

export default FavoritedImages

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
    }
    div {
        vertical-align: middle;
        max-width: 200px;
        min-width: 200px;
        max-height: 200px;
        min-height: 200px;
    }
`