import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import SignInPage from './SignInPage';
import Home from './Home';
import '../styles/styles.css'


const Body = ()=>{

    const routes = createBrowserRouter(
        [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/signin',
                element:<SignInPage/>
            }
        ]
    )
    return(
        <div className="bg-black bg-opacity-85 body">
            <RouterProvider router={routes}/>
        </div>
    )
}

export default Body;