import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import UserArticleCard from "./UserArticleCard";
import Swal from "sweetalert2";

const UserArticles = () => {
  const axiosSecure = useAxiosSecure();

  const { data: news = [], refetch } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const result = await axiosSecure.get("/news");
      return result.data;
    },
  });

  console.log(news);


  const handleApproved = (id, status) => {
    console.log(status);
    
    axiosSecure.patch(`/news/updateStatus/${id}`, {status})
    .then( (res) => {
      console.log(res.data.modifiedCount);
      
      if(res.data.modifiedCount > 0) {

      Swal.fire({
        title: `${status}`,
        text: `You are successfully ${status} article!`,
        icon: "success"
      });
      refetch()

    }

    })
    .catch(() => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Update Failed. Something went wrong! ",
        footer: 'please try again'
      });
    })

  }




  return (
    <>
      <div className=" w-full space-y-8">
        {news.map( (element) => <UserArticleCard element={element} key={element._id} handleApproved={handleApproved} /> )}
      </div>
    </>
  );
};

export default UserArticles;
