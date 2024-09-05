import { useCountries } from "use-react-countries";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import {
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import useAuth from "../../Hooks/UseAuth/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useaxiosSecure/useaxiosSecure";
 

 
  

 



const PaymentCard = () => {

  const { countries } = useCountries();
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()

   const handlePayment = (e) => {

    e.preventDefault()
    const email = e.target.email.value;

    if(email === user?.email){
      console.log("matched--------------->");

      axiosSecure.patch(`users/payment/${email}`)
      .then((res) => {

        if(res.data.modifiedCount){
          Swal.fire({
            title: "Payment!",
            text: "Payment Successful",
            icon: "success",
          });
        }

      })
      .catch( () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Payment failed. Something went wrong! ",
          footer: 'please try again'
        });
      })

    }

   }


  return (
    <>
     <Card className="w-full max-w-[24rem] mx-auto my-24">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <div className="mb-4 h-20 p-6 text-white">
         
            <img alt="paypal " className="w-14 " src="https://docs.material-tailwind.com/icons/paypall.png" />
          
        </div>
        <Typography variant="h5" color="white">
          Material Tailwind PRO
        </Typography>
      </CardHeader>
      <CardBody>
      <form onSubmit={handlePayment} className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Personal Details
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    name="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
 
                <div className="my-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Billing Address
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Country
                  </Typography>
                  <Select
                    placeholder="USA"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    menuProps={{ className: "h-48" }}
                  >
                    {countries.map(({ name, flags }) => (
                      <Option key={name} value={name}>
                        <div className="flex items-center gap-x-2">
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          {name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mt-4 -mb-2 font-medium"
                  >
                    Postal Code
                  </Typography>
                  <Input
                    placeholder="0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{ className: "mt-4" }}
                  />
                </div>
                <Button type="submit" className="bg-gradient-to-r from-[#EB3678] to-[#FB773C]" size="lg">pay with paypal</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
      </CardBody>
    </Card>
    </>
  );
};

export default PaymentCard;

