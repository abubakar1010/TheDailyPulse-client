import { useQuery } from "@tanstack/react-query";
import UserArticleCard from "./UserArticleCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useaxiosSecure/useaxiosSecure";
import { Spinner } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";

const UserArticles = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: news = [],
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const result = await axiosSecure.get("/news");
      return result.data;
    },
  });

  const handleApproved = (id, status) => {
    console.log(status);

    axiosSecure
      .patch(`/news/updateStatus/${id}`, { status })
      .then((res) => {
        console.log(res.data.modifiedCount);

        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: `${status}`,
            text: `You are successfully ${status} article!`,
            icon: "success",
          });
          refetch();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Update Failed. Something went wrong! ",
          footer: "please try again",
        });
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/news/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Article has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Delete Failed. Something went wrong! ",
              footer: "please try again",
            });
          });
      }
    });
  };

  if (isFetching)
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <Spinner color="purple" className=" w-16 h-16"></Spinner>
      </div>
    );

  return (
    <>
          <Helmet>
        <title>Users Articles | The Daily Pulse </title>
      </Helmet>
      <div>
        <div className=" my-12">
          <h1 className=" text-3xl text-center font-medium text-[#0000009f]">
            Manage All Articles
          </h1>
          <p className="text-xl font-bold text-[#0000009f]">
            Total Articles: {news.length}
          </p>
        </div>
        <div className=" w-full space-y-8">
          {news.map((element) => (
            <UserArticleCard
              element={element}
              key={element._id}
              handleApproved={handleApproved}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserArticles;
