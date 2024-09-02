import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Chip,
  } from "@material-tailwind/react";

  import PropTypes from 'prop-types'


const ArticleDetailsCard = ({item}) => {

    console.log(item.tags);
    
    const {image,title, publisher, description, authorName, posted, tags} = item;
    return (
        <>
            <div>
            <Card className="w-full shadow-none ">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 max-h-[500px]  rounded-r-none"
        >
          <img
            src={image}
            className=" w-full h-full "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {publisher}
          </Typography>
          <div className=" flex gap-4 mb-6">

            {
                tags.map( (item) => {
                    return <><Chip
                    variant="ghost"
                    color="green"
                    size="sm"
                    value={item.value}
                    
                  />
                  </>
                })
            }

          </div>
          <div className=" border-l-8 rounded-md pl-4 border-orange-600 ">
          <Typography variant="h6" color="gray" className="mb-2 uppercase">
            {authorName}
          </Typography>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            {posted}
          </Typography>
          </div>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="mb-8 font-normal ">
            {description}
          </Typography>
        </CardBody>
      </Card>
            </div>
        </>
    );
};

ArticleDetailsCard.propTypes = {
    item: PropTypes.object
}

export default ArticleDetailsCard;