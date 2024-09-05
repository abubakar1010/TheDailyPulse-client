
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
import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/16/solid";
import Swal from "sweetalert2";
import useUserArticle from "../../Hooks/useUserArticle/useUserArticle";
import useAxiosSecure from "../../Hooks/useaxiosSecure/useaxiosSecure";

const MyArticles = () => {
    const axiosSecure = useAxiosSecure()

    const [article, refetch, isPending] = useUserArticle()




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
            
            axiosSecure.delete(`/news/${id}`)
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
        <title> MyArticles | The Daily Pulse</title>
      </Helmet>
      <Card className="h-full w-full my-12">
        <CardBody className="overflow-x-auto lg:overflow-hidden
         px-0">
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
                      <td className={` text-center ${classes}`}>
                      <Link to={`/updateArticle/${_id}`}>
                      <Tooltip content="Edit Articles">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      </Link>
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