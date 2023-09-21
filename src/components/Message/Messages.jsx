// const Messages = () => {
//     return ( 
//         <>
//         <div >Navigate to Messages</div>
//         <div id="homeTab">
//         <div className="home">
//           <h1 >Messages Section!</h1>      
//         </div>    
//         </div>
//         </>     
//      );
// }
 
// export default Message;

import React from "react";
import MessagesList from "./MessagesList";
import Title from "./title";

// Define a functional component for displaying a message
const Message = (prop) => {
  // Extract message data from props
  const { message } = prop;

  // Render the message components
  return (
    <MessagesList>
      <Title>
        {/* Display the message title */}
        <h3>Re: {message?.post?.title}</h3>
      </Title>
      <Content>
        {/* Display sender information */}
        <div>
          <strong>From:</strong> {message.fromUser.username}
        </div>
        {/* Display message content */}
        <div>
          <strong>Message:</strong> {message.content}
        </div>
      </Content>
    </MessagesList>
  );
};

// Export the Message component as the default export
export default Message;

