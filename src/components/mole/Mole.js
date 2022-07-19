import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
 
  return (
    <div className="den">
      { props.den &&
      <img src={MoleIcon} className="Mole" alt="Mole" onClick={props.isWhacked} />
      }
    </div>
  )} 


export default Mole
