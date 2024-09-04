
import { RiDeleteBin6Fill } from "react-icons/ri";
import {
  Card,
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  Chip,
  Spinner,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/UseAuth/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/16/solid";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const MyArticles = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()



    const { data: article = [], refetch, isPending } = useQuery({
      queryKey: ["article"],
      queryFn: async () => {
        const result = await axiosPublic.get(`/news/user/${user?.email}`);
        return result.data;
      },
    });

    if (isPending)
      return (
        <div className=" h-screen w-full flex justify-center items-center">
          <Spinner color="purple" className=" w-16 h-16"></Spinner>
        </div>
      );

    

    const handleDelete = (id) => {

      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          
          axiosPublic.delete(`/news/${id}`)
          .then( res => {
              if (res.data.deletedCount > 0) {
                     Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                        refetch()
              }
          })
          
          }
    })
  }
     

  

  const TABLE_HEAD = ["Article Title", "Premium", "Status", "Details", "Update", "Delete"];

  return (
    <>
    <Helmet>
        <title>The Daily Pulse | MyArticles</title>
      </Helmet>
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y text-center border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {article.map(
                ({ _id,
                  title,
                  image,
                  status,
                  isPremium }, index) => {
                  const isLast = index === article.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={`${classes} w-[400px] `}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={image}
                            alt={"articlePhot"}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold "
                          >
                            {title}
                          </Typography>
                        </div>
                      </td>
                      <td className={` text-center ${classes}`}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {isPremium? "Yes" : "No"}
                        </Typography>
                      </td>
                      <td className={` text-center ${classes}`}>
                      <div className="w-max m-auto">
                        <Chip
                          size="sm"
                          variant="ghost"
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
                    </td>

                      
                      <td
                        onClick={() => {}}
                        className={` text-center ${classes}`}
                      >
                        <Link to={`/articleDetails/${_id}`}>
                        <p className=" text-center w-max m-auto">Details</p>
                      </Link>
                      </td>
                      <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                      <td
                        onClick={() => handleDelete(_id)}
                        className={` text-center ${classes}`}
                      >
                        <Tooltip content="Delete Item">
                          <IconButton variant="text">
                            <RiDeleteBin6Fill className=" h-4 w-4 text-red-600"></RiDeleteBin6Fill>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </>
  );
};

export default MyArticles;