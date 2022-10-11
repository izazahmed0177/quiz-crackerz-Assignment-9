import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizQuestions from "../components/QuizQuestions/QuizQuestions";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import { quizData } from "../loaders/getQuizData";

const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../components/Root/Root");

const router = createBrowserRouter([


    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: quizData,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: quizData,
            },
            {
                path: '/home',
                element: <Home></Home>,
                loader: quizData,
            },
            {
                path: '/topics',
                element: <Topics></Topics>,
                loader: quizData,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/quiz/:quizId',
                loader: async ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)

                },
                element: <QuizQuestions></QuizQuestions>
            }
        ]


    },
])

export default router