import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Avatar, Chip } from "@material-tailwind/react";

const UserArticleCard = ({ element, handleApproved }) => {
  const {
    bookId,
    authorName,
    authorEmail,
    title,
    authorImage,
    posted,
    publisher,
    status,
    _id
  } = element;



console.log(_id);







  return (
    <div className=" shadow-lg rounded-lg py-2 px-4 w-full flex gap-12  border border-[#13131326] flex-col xl:flex-row  ">
      <div className=" pt-8  ">
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer"
          src={authorImage}
        />
      </div>
      <div className=" w-full">
        <p className=" text-[#131313] font-bold text-2xl pt-4 mb-4 ">{title}</p>

        <div className=" pb-2 text-[#131313CC] text-xl font-medium ">
          <p>
            <span className="pr-1 text-[#131313] font-bold">By: </span>
            {authorName}{" "}
          </p>

          <p className=" pt-2 pl-6 ">{authorEmail}</p>
        </div>

        <div className="  py-4 ">
          <p>
            <span className="text-[#131313] font-bold">Posted Date: </span>{" "}
            {posted}
          </p>
        </div>

        <div className=" space-y-4 pb-8  border-b border-[#13131326]">
          <p className=" text-[#13131399] ">
            <span className="text-[#131313] font-bold">Publisher: </span>{" "}
            {publisher}
          </p>
          <div className=" text-[#13131399] ">
            <span className="text-[#131313] font-bold">Status: </span>
            <Chip
              size="sm"
              variant="ghost"
              className=" w-fit inline "
              value={status}
              color={
                status === "Approved"
                  ? "green"
                  : status === "pending"
                  ? "amber"
                  : "red"
              }
            />
          </div>
        </div>

        <div className=" flex flex-col md:flex-row gap-6 mt-8 mb-9">
          
          <p onClick={() => handleApproved(_id, "Approved")} className=" cursor-pointer bg-[rgba(35,190,10,0.05)] text-[#23BE0A] rounded-full px-6 py-1">
              Approved
            </p>
          <p onClick={() => handleApproved(_id, "Declined")} className=" cursor-pointer bg-[#FFAC3326] text-[#FFAC33] rounded-full px-6 py-1">
            Decline
          </p>
          <p className=" bg-[#ec434331] text-[#ff4133] rounded-full px-6 py-1">
            Delete
          </p>
          <NavLink to={`/bookDetails/${bookId}`}>
          <p className=" bg-[#328EFF26] text-[#328EFF] rounded-full px-6 py-1">
            Make Premium
          </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

UserArticleCard.propTypes = {
  element: PropTypes.object,
  handleApproved: PropTypes.func,
};

export default UserArticleCard;
