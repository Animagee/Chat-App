import { MultiChatSocket, 
         MultiChatWindow, 
         useMultiChatLogic } from 'react-chat-engine-advanced'

const PROJECT_ID = "Enter your project ID";

const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic(
        PROJECT_ID,
        props.user.username, 
        props.user.secret
    );
    return(
        <div style={{ height: '100vh', backgroundColor: 'black'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
        </div>
    )
}

export default ChatsPage