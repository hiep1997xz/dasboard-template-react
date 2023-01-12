import React from 'react'
import './GoogleMap.scss'

const GoogleMap = () => {
  return (
    <div className="googlemap_container">
      <div className='google'>
        <iframe
          width="800"
          height="450"
          id="gmap_canvas"
          title="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.160369319574!2d105.76859011533216!3d21.026268293238303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455c2ee01a76b%3A0xb118ceaa0cb97f16!2zU8OibiBiw7NuZyBN4bu5IMSQw6xuaCAy!5e0!3m2!1svi!2s!4v1673511262926!5m2!1svi!2s"></iframe>
      </div>
    </div>
  )
}

export default GoogleMap
