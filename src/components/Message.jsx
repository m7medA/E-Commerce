import { useSelector } from "react-redux";

function Message() {
  const wishlist = useSelector((state) => state.wishlist.wishlistIds);

  if (wishlist.length === 0) {
    return (
      <div className="text-center text-[#3E445A] mt-10 text-3xl">
        Your wishlist is empty 💔
      </div>
    );
  }
  return null;
}

export default Message;
