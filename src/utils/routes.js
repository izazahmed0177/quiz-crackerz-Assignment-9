const { createBrowserRouter } = require("react-router-dom");
const { default: Root } = require("../components/Root/Root");

const router = createBrowserRouter([


    {
        path: '/',
        element: <Root></Root>,

    },
])

export default router