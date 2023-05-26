import { useEffect, useState } from "react";
import {addDoc, collection , onSnapshot, serverTimestamp, query, where, orderBy} from "firebase/firestore"
import {db} from "../../../Firebase/firebase.config"

const ChatNavbar = () => {

    const messageRef = collection(db,"messages");
    const [messages , setMessages] = useState([]);


    useEffect (() => {
        const queryMessages = query(messageRef, 
              where("room","==",room),
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

    return ( 
   
          <div>
              <div className="h-20  bg-gray-300">

                </div>
          </div>

       
     );
}
 
export default ChatNavbar; 