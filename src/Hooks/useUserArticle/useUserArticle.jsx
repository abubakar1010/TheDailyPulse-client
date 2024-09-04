import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/useAuth";
import useAxiosSecure from "../useaxiosSecure/useaxiosSecure";


const useUserArticle = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { data: article = [], refetch, isFetching } = useQuery({
        queryKey: ["article"],
        queryFn: async () => {
          const result = await axiosSecure.get(`/news/user/${user?.email}`);
          return result.data;
        },
      });

      return [article, refetch, isFetching]

};

export default useUserArticle;