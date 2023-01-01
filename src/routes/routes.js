import { useRoutes } from 'react-router-dom';
// views
import Home from '../pages/Home';
import ChatPage from '../pages/ChatPage';

export default function Router({socket}) {
    return useRoutes([
        {
            path: '/',
            element: <Home socket={socket}/>
        },
        {
            path: '/chat',
            element: <ChatPage socket={socket}/>
        }
    ])
}