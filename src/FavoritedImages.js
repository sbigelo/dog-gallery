import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components"


class FavoritedImages extends Component {

    state = {
        comments: '',
        submittedComments: [],
        checkForSingleSubmit: false
    }


handleDelete = (e) => {
    this.props.favoriteRemove(e.target.getAttribute('src'))
}

handleChange = (e) => {
    this.setState({
        comments: e.target.value
        })
}

handleSubmit = () => {
    if (!this.state.checkForSingleSubmit) {
        if (this.state.comments.length < 20) {this.setState({
        submittedComments: [...this.state.submittedComments, this.state.comments],
        checkForSingleSubmit: true
        }) 
        } else {
            alert("Comment Must Be Less Than 20 Characters")
        }
    } 
}

handleCommentDelete = () => {

}

   render() {
       let card
       this.props.pic.endsWith('mp4') ? card = <InnerGrid onClick={this.handleDelete} className='innerGrid' ><ReactPlayer volume={0} playing={true} loop={true} url={this.props.pic} style={{}} /> </InnerGrid> : card = <InnerGrid onClick={this.handleDelete} className='innerGrid'><img type="video/jpeg" src={this.props.pic} alt=''></img></InnerGrid>

       let showComments = this.state.submittedComments.map(comment => <li key={comment}>{comment}</li>)

    return(
        <div>
            {card}
            <input onChange={this.handleChange} placeholder="Add a comment"></input><button onClick={this.handleSubmit}>Submit</button>
            <Comments>{showComments}</Comments>
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
const Comments = styled.ul`
    color: #fff;
`