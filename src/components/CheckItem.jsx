const CheckItem = () => {
  return (
    <span className="bg-blue-200 flex justify-center items-center rounded-full p-1 mr-2">
      <svg
        className="flex-shrink-0 h-5 w-5 text-indigo-700"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
    </span>
  );
};

export default CheckItem;
