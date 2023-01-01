import { useRoutes } from 'react-router-dom';
// views
import Home from '../components/Home';
import ChatPage from '../components/ChatPage';

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