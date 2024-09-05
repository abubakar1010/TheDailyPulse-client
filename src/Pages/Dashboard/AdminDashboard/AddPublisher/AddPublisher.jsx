import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useForm } from "react-hook-form";
  import Swal from "sweetalert2";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useaxiosSecure/useaxiosSecure";
  
  const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;
  
  const AddPublisher = () => {
  
  
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  
    const {
      register,
      handleSubmit,
      reset,
      // formState: { errors },
    } = useForm();
  
  
  
  
    const onSubmit = async(data) => {
      const itemInfo = data;
      console.log(itemInfo)
  
      const imgFile = {image: itemInfo.image[0]}
  
      const result = await axiosPublic.post(image_upload_api, imgFile, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
  
      console.log(result.data);
  
      if(result.data.success){
          const publisherInfo = {
          name: itemInfo.name,
          image: result.data.data.display_url,
          totalNews: 0
        }
        console.log(publisherInfo);
  
          const publisherResponse = await axiosSecure.post("/publisher", publisherInfo)
  
        console.log(publisherResponse.data);
        
        if(publisherResponse.data.insertedId){
          Swal.fire({
            icon: "success",
            title: "Publisher Successfully Added",
            showConfirmButton: false,
            timer: 1500
          });
          reset()
        }
  
        
      }
      
  
    };
  
    
  
    return (

      <>
        <div className="flex justify-center items-center mb-12 my-12 w-full">
          <div className=" w-full  bg-[#F3F3F3] px-12 py-8 ">
            <Card color="transparent" className=" w-full" shadow={false}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 mb-2 w-full"
              >
                <div className="mb-1 flex flex-col gap-6 !w-full">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Publisher Name
                  </Typography>
                  <Input
                    {...register("name", { required: true })}
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 !w-full focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
  
                 
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Upload Publisher Logo
                    </label>
                    <input
                      {...register("image", { required: true })}
                      className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                  </div>
                </div>
                <Button type="submit" className="mt-6">
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </>
    );
  };
  
  export default AddPublisher;
  