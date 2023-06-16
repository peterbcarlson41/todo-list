import { FC } from "react";

const ButtonWithIcon: FC = () => {
  const handleClick = () => {
    // Handle the click event here
    console.log("Button clicked!");
  };

  return (
    <div className="p-2">
      <button
        className="flex items-center justify-center border border-gray-400 rounded hover:bg-gray-100 focus:outline-none"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 text-slate-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonWithIcon;
