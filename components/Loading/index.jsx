import React from 'react'

import {
  LoadingWrapper
} from './index.style'

const Loading = () => {
  
  return (
    <LoadingWrapper>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="24px" height="30px" viewBox="0 0 24 30" style={{"enableBackground":"new 0 0 50 50"}} xmlSpace="preserve">
        <rect x="0" y="13" width="4" height="5" fill="purple">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5" 
            begin="0s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="10" y="13" width="4" height="5" fill="purple">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5" 
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.15s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="13" width="4" height="5" fill="purple">
          <animate attributeName="height" attributeType="XML"
            values="5;21;5" 
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
          <animate attributeName="y" attributeType="XML"
            values="13; 5; 13"
            begin="0.3s" dur="0.6s" repeatCount="indefinite" />
        </rect>
      </svg>
    </LoadingWrapper>
  )
}

export default Loading