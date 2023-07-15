import { useState } from "react";

const ToggleAppearance = () => {
  const [toggleMode, setToggleMode] = useState(true);
  // Dark mode implementation requires the full completion of the UI to the updated design

  return (
    <button onClick={() => setToggleMode(!toggleMode)} className="bg-[#E7E7E7] w-[60px] h-[30px] rounded-full">
      <div className={`bg-[#fff] w-[25px] h-[25px] rounded-full mx-[2.5px] p-[2px] duration-500 ${!toggleMode && "translate-x-[30px] transition-all duration-500"}`}>
        <div className={`bg-[#ffcf3f] w-[21px] h-[21px] rounded-full duration-500 ${!toggleMode && "bg-[#353535] duration-500"}`}></div>
      </div>
    </button>
  );
};

export default ToggleAppearance;
