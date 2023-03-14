<<<<<<< HEAD
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
=======
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link"


const LogoutButton = ({ handleLogout }) => {
    return (
      <div>
        <button className="font-bold" onClick={handleLogout}>
            LOGOUT <LogoutIcon/>
        </button>
        </div>
    )
}
export default LogoutButton
>>>>>>> 8fd5f7d792b3c968a561617eed41a3d1a4ed4e21
