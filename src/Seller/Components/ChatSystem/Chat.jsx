import { useEffect, useState } from "react";
import {addDoc, collection , onSnapshot, serverTimestamp, query, where, orderBy} from "firebase/firestore"
import {db} from "../../../Firebase/firebase.config"
import ChatNavbar from "./ChatNavbar"

export const Chat = (props) => {
    
    // const room = "Room1" ;
    const user = props.user;
    const to = props.with;
    
    const [newMessage, setNewMessage] = useState("");
    const messageRef = collection(db,"messages");
    const [messages , setMessages] = useState([]);

    
    useEffect (() => {
        const queryMessages = query(messageRef,
                // or(where("user","==",user),
                where("user","in",[to,user]),
                where("to","in",[to,user]),
                
                orderBy("createdAt")
        );
        const unsubcribe = onSnapshot(queryMessages, (snapshot) =>{
            let messages = [];
           snapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
           });
           setMessages(messages);
        });
        
        return() => unsubcribe();
    }, []);

    const handleSumit = async (e) => {
        e.preventDefault();
        let today = new Date(),
            min = today.getMinutes(),
            hour = today.getHours(),
            date = "";
            if(hour>12){
                hour = hour-12;
            }
            if (min < 10 || hour < 10) {
                if (hour < 10) {
                date = '0' + hour + ':' + min;
                }
                if (min < 10) {
                date = hour + ':' + '0' + min;
                }
                if (min < 10 && hour < 10) {
                date = '0' + hour + ':' + '0' + min;
                }
            } else {
                date = hour + ':' + min;
            }
    
        if(newMessage === "") return;
        await addDoc(messageRef , {
            text: newMessage,
            createdAt: serverTimestamp(),
            // user : auth.currentUser.displayName,
            user ,
            to ,
            time: date,
            // room,
        }) ;

        setNewMessage("");

    };

    return (
        <div className="w-full ml-5 mt-3">

            {/* output */}
            <div className=""> {messages.map((message) => (
                <div className="" key ={message.id}>
                    { user === message.user && (
                        <h1 className="text-red-500 justify-end flex pr-16">
                            {message.text} : {user}
                            <br></br>
                            {message.time}
                        </h1>
                    )}
                    { user !== message.user && (
                        <h1 className="">
                           {to} : {message.text}
                           <br></br>
                            {message.time}
                        </h1>
                    )}                    
                </div>
                ))}
                <br></br>
            </div>
            {/* form submit */}
            <form onSubmit={handleSumit} className="mb-20">
                <input 
                    className="new-message-input" 
                    placeholder="Type your message here..." 
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <button type = "submit" className="send-button pl-4">
                    Send
                </button>
            </form>
           
        </div>
    );

};