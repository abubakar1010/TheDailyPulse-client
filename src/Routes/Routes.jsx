import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "../Private/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminRoute from "../Private/AdminRoute";
import AddArticle from "../Pages/AddArticle/AddArticle";
import AllArticles from "../Pages/AllArticles/AllArticles";
import ArticleDetails from "../Pages/ArticleDetails/ArticleDetails";
import Subscription from "../Pages/Subscription/Subscription";
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import UserArticles from "../Pages/Dashboard/AdminDashboard/UsersArticles/UsersArticles";
import AddPublisher from "../Pages/Dashboard/AdminDashboard/AddPublisher/AddPublisher";
import MyProfile from "../Pages/MyProfile/MyProfile";
import MyArticles from "../Pages/MyArticles/MyArticles";
import UpdateArticle from "../Pages/UpdateArticle/updateArticle";
import PaymentCard from "../Components/PaymentCard/PaymentCard";
import PremiumArticle from "../Pages/PremiumArticles/PremiumArticles";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:'/',
          element: <Home />
        },
        {
          path: "/addArticles",
          element: <PrivateRoute><AddArticle /></PrivateRoute>
        },
        {
          path: "/allArticle",
          element: <AllArticles />
        },
        {
          path: "/articleDetails/:id",
          element: <PrivateRoute><ArticleDetails /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: "/subscription",
          element: <PrivateRoute><Subscription /></PrivateRoute>
        },
        {
          path: "/payment",
          element: <PaymentCard />
        },
        
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Registration />
        },
        {
          path: '/myProfile',
          element: <MyProfile />
        },
        {
          path: '/myArticles',
          element: <MyArticles />
        },
        {
          path: '/updateArticle/:id',
          element: <UpdateArticle />
        },
        {
          path: '/premiumArticles',
          element: <PremiumArticle />
        },

      ]
    },
    {
      path: 'dashboard',
      element: <AdminRoute><Dashboard /></AdminRoute>,
      children:[
        
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers /></AdminRoute>
        },
        {
          path: 'allArticles',
          element: <AdminRoute><UserArticles /></AdminRoute>
        },
        {
          path: 'addPublisher',
          element: <AdminRoute><AddPublisher /></AdminRoute>
        },
      ]
    }
  ]);

  export default router