import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link"


const LogoutButton = ({ handleLogout }) => {
    
    return (
      <>
      <div>
        <button className = "py-1.5 px-2 m-2 rounded-md flex text-white bg-red-500 font-bold my-btn" 
        onClick={handleLogout} 
        >
            <div className = "text-x">Logout</div> 
            <LogoutIcon size = {25} className = "ml-2" />
        </button>
        </div>

        <style>
        {`
          @media (max-width: 767px) {
            .my-btn {
              display: none;
            }
          }
        `}
      </style>
      </>
    )
}
export default LogoutButton
