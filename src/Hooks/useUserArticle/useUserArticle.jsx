import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import useAuth from "../UseAuth/useAuth";


const useUserArticle = () => {

    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()
    const { data: article = [], refetch, isPending } = useQuery({
        queryKey: ["article"],
        queryFn: async () => {
          const result = await axiosPublic.get(`/news/user/${user?.email}`);
          return result.data;
        },
      });

      return [article, refetch, isPending]

};

export default useUserArticle;