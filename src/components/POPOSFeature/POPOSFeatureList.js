import React from 'react'
import POPOSFeature from './POPOSFeature'
import './POPOSFeatureList.css'

export default function POPOSFeatureList(props) {
	const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
	return <div className="POPOSFeatureList">{icons}</div>
}
