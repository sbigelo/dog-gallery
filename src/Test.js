import React from 'react';

import Gallery from "react-photo-gallery";

const Test = (props) => {
    console.log(props.photos)
    return (
        <div>
<Gallery src={props.photos.url} photos={props.photos} />;
        </div>
)
   
}

export default Test