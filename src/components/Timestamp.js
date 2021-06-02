import React from 'react'
import formatDistanceToNow from "date-fns/formatDistanceToNow";


const Timestamp = (props) => {
    return (
      <div className="timestamp">{formatDistanceToNow(props.timestamp)} ago</div>
    )
}

export default Timestamp;