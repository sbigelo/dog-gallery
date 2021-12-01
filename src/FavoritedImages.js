import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components"

class FavoritedImages extends Component {

   render() {
    //    const uniquePics = this.props.pics.filter((x, i, a) => a.indexOf(x) == i)
    //    console.log(uniquePics)
       let card
       this.props.pic.endsWith('mp4') ? card = <div className='innerGrid' ><ReactPlayer volume='0' playing='true' loop='true' url={this.props.pic} style='' /> </div> : card = <div className='innerGrid'><img type="video/jpeg" src={this.props.pic}></img></div>
    return(
        <InnerGrid>
            {card}
            
        </InnerGrid>
    )
   }
}

export default FavoritedImages

const InnerGrid = styled.div`
    flex: 30%;
    padding: 0 4px;
    img {
        margin-top: 8px;
        vertical-align: middle;
        max-width: 200px;
        min-width: 199px;
        max-height: 200px;
        min-height: 199px;
    }
    div {
        margin-top: 8px;
        vertical-align: middle;
        max-width: 200px;
        min-width: 199px;
        max-height: 200px;
        min-height: 199px;
    }
`