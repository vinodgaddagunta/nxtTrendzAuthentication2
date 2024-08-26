import {TiWeatherSunny} from 'react-icons/ti'
import {WiMoonFull} from 'react-icons/wi'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <h1>Onebox</h1>
      <div>
        <TiWeatherSunny />
        <WiMoonFull />
        <h2>Times Workspce</h2>
      </div>
    </div>
  </nav>
)
export default Header
