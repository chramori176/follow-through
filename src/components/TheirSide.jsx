import React from 'react';
import TheirPost from './TheirPost.jsx';

const TheirSide = (props) => {
  return (
    <div id='theirs' className='text-center col-xs-6'>
      <h2>Their Post</h2>
      <TheirPost name={props.name} image={props.image} body={props.body} />
      <div className='text-right'>
        <button id='comment' className='btn btn-primary btn-lg' data-toggle="modal">Comment</button>
      </div>
    </div>
  )
}

export default TheirSide;