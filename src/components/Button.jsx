function Button({ children, type = "add", buttonFunc }) {
  const base =
    "text-white lg:px-5 lg:py-2 px-4 py-2 rounded-full text-lg hover:cursor-pointer  transition-all duration-300";

  const style =
    type === "delete"
      ? base + " bg-[#D51243] hover:bg-[#a50c32]"
      : base + " bg-[#00B853] hover:bg-[#009944]";

  return (
    <button className={style} onClick={buttonFunc}>
      {children}
    </button>
  );
}

export default Button;
