import ChatBar from "./ChatBar";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

export default function ChatPage({ socket }) {
    return (
        <section className="chat">
            <ChatBar/>
            <section>
                <ChatBody/>
                <ChatFooter/>
            </section>
        </section>
    );
};