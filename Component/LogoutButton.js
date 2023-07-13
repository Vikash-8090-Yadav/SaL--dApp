const LogoutButton = ({ handleLogout }) => {
  return (
      <button
        className="py-2.5 px-8 rounded-md text-white bg-[#9010FF] font-['Inter'] font-medium text-base max1:py-[.6rem] max1:w-full"
        onClick={handleLogout}
      >
        <p className='text-x'>Logout</p>
      </button>
  );
};
export default LogoutButton;
