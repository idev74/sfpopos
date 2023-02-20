import { useNavigate } from 'react-router-dom'
import './RandomSpace.css';
import data from '../../sfpopos-data.js'

export default function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomSpace"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Find a Random Space</button>
  )
}
