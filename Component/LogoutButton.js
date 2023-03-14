import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link"


const LogoutButton = ({ handleLogout }) => {
    return (
      <div>
        <button className = "font-bold flex" onClick={handleLogout}>
            <div className = "max-md:hidden">LOGOUT</div> 
            <LogoutIcon size = {25} className = "ml-2" />
        </button>
        </div>
    )
}
export default LogoutButton
