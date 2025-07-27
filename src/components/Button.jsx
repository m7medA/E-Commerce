function Button({
  children,
  type = "add",
  buttonFunc,
  base = "text-white lg:px-3 lg:py-1 px-3 py-1 rounded-lg text-lg hover:cursor-pointer  transition-all duration-300",
}) {
  const style =
    type === "delete"
      ? base + " bg-[#D51243] hover:bg-[#a50c32]"
      : base + " bg-main hover:bg-[#038E42]";

  return (
    <button className={style} onClick={(e) => buttonFunc(e)}>
      {children}
    </button>
  );
}

export default Button;
