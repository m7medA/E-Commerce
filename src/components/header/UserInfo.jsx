function UserInfo() {
  return (
    <div className="flex items-center justify-between w-[auto]">
      <span>
        <i className="fa-solid fa-user text-lg text-[#3E445A] border border-[#E2E4EC] px-4 py-3.5 rounded-full"></i>
      </span>

      <p className="text-lg px-6 text-[#3E445A] font-bold">$0.00</p>

      <div className="relative">
        <i className="fa-solid fa-bag-shopping text-lg text-[#EA2B0F] bg-[#FFF1EE] px-4 py-3.5 rounded-full"></i>
        <p className="absolute top-0 right-0 bg-[#EA2B0F] text-white px-1 rounded-full text-xs font-bold">
          0
        </p>
      </div>
    </div>
  );
}

export default UserInfo;
