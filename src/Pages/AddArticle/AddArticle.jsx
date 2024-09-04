import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Spinner,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

// import chroma from "chroma-js";
// import { ColourOption, colourOptions } from '../data'
import Select from "react-select";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useState } from "react";
import useAuth from "../../Hooks/UseAuth/useAuth";
import usePublisher from "../../Hooks/usePublisher/usePublisher";
import moment from "moment";
import useAxiosSecure from "../../Hooks/useaxiosSecure/useaxiosSecure";

const image_hoisting_key = import.meta.env.VITE_IMAGE_HOISTING_KEY;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`;

const AddArticle = () => {


  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  const [publisher,loader] = usePublisher()

  // console.log(publisher);
  

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  // react select library code here

  const [tagsOption, setTagsOption] = useState(null);
  const [publisherOption, setPublisherOption] = useState(null);

  const tagsOptions = [
    { value: 'Breaking News', label: 'Breaking News' },
    { value: 'Politics', label: 'Politics' },
    { value: 'World News', label: 'World News' },
    { value: 'Economy', label: 'Economy' },
    { value: 'Business', label: 'Business' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Science', label: 'Science' },
    { value: 'Health', label: 'Health' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Environment', label: 'Environment' },
    { value: 'World News', label: 'World News' },
    { value: 'Local News', label: 'Local News' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Education', label: 'Education' },
    { value: 'Culture', label: 'Culture' },
    { value: 'Opinion', label: 'Opinion' },
    { value: 'Lifestyle', label: 'Lifestyle' },
    { value: 'Travel', label: 'Travel' },
    { value: 'Food', label: 'Food' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Real Estate', label: 'Real Estate' },
    { value: 'Weather', label: 'Weather' },
    { value: 'Art', label: 'Art' },
    { value: 'Music', label: 'Music' },
    { value: 'Fashion', label: 'Fashion' }
];


const publisherOptions = [
];
  publisher.map( (element) => publisherOptions.push({value: element.name, label: element.name}))

  // console.log(tagsOption, publisherOption);



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
        const articlesInfo = {
        title: itemInfo.title,
        tags: tagsOption,
        publisher: publisherOption.value,
        description: itemInfo.description,
        views: 0,
        status: "pending",
        subscription: null,
        authorName: user.displayName,
        authorEmail: user.email,
        authorImage: user.photoURL,
        posted: moment().calendar(),
        image: result.data.data.display_url
      }
      console.log(articlesInfo);

        const menuResponse = await axiosSecure.post("/news", articlesInfo)

      console.log(menuResponse.data);
      
      if(menuResponse.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item has been Added",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
      }

      
    }
    

  };

  if(loader) return <div className=" h-screen w-full flex justify-center items-center"><Spinner color="purple" className=" w-16 h-16"></Spinner></div>

  return (
    //         like title,image file
    // field,publisher,tags, description and a submit button
    <>
      <div className="flex justify-center items-center mb-12 flex-col w-full">
        <div className=""></div>
        <div className=" w-full  bg-[#F3F3F3] px-12 py-8 ">
          <Card color="transparent" className=" w-full" shadow={false}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 mb-2 w-full"
            >
              <div className="mb-1 flex flex-col gap-6 !w-full">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Title
                </Typography>
                <Input
                  {...register("title", { required: true })}
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 !w-full focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />

                <div className=" flex justify-center items-center gap-8 w-full">
                  <div className="w-full  ">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Tags
                    </Typography>

                    <Select
                    
                    isMulti={true}
                      defaultValue={tagsOption}
                      onChange={setTagsOption}
                      options={tagsOptions}
                    />
                  </div>
                  <div className=" w-full">
                    <Typography variant="h6" color="blue-gray" className="mb-3">
                      Publisher
                    </Typography>
                    <Select
                    
                    
                      defaultValue={publisherOption}
                      onChange={setPublisherOption}
                      options={publisherOptions}
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    {...register("description", { required: true })}
                    label="Message"
                    rows={9}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Upload file
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

export default AddArticle;
