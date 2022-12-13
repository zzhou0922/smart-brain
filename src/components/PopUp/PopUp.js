import React from "react";

const PopUp = (props) => {
  
    if(props.comefrom === 'signin') {
      return (
         <div className="fw8">
            <p>Unauthorized. <br />
            Please try again!</p>
          </div>
      );
    } else if(props.comefrom === 'register'){
      return (
         <div className="fw8">
           <p>Oops! <br />
           Internet connection failed <br />
           or your entered email address <br />
           is already registered! <br />
           Please try it again!</p>
         </div>
        );
    }
}

export default PopUp;