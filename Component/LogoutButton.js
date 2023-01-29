import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link"


const LogoutButton = ({ handleLogout }) => {
    return (
      <div>
        <button onClick={handleLogout}>
            LOGOUT <LogoutIcon/>
        </button>
        </div>
    )
}
export default LogoutButton
