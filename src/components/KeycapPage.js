import React from 'react'

import keycapData from '../data/keycapData'

const KeycapPage = () => {
  console.log(keycapData)

  return (
    <div>
      {keycapData.map(item =>
        <div>
          <p>{item.name}</p>
          <img src={item.images.hero1} />
        </div>
      )}
    </div>
  )
}

export default KeycapPage