type ButtonWithIconProps = {
  id: string;
  hideTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export function ButtonWithIcon({
  id,
  hideTodo,
  deleteTodo,
}: ButtonWithIconProps) {
  return (
    <div className="p-2">
      <button
        className="flex items-center justify-center border-none border-slate-400 rounded hover:bg-slate-700 focus:outline-none"
        onClick={(e) => {
          hideTodo(id);
          deleteTodo(id);
        }}
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
}
