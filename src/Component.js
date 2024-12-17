import React from 'react';

function Component({ backgroundColor, title, textcolor="black", children }) {
    const style = {
        backgroundColor: backgroundColor, // Use the backgroundColor prop
        padding: '20px',
        borderRadius: '5px',
        height: '80vh'
      };

    const textstyle = {
        color: textcolor,
        fontsize: '90px'
    }
    
      return (
        <div style={style}>
          <h1 style={textstyle}>{title}</h1>
          {children}
        </div>
      );
}
export default Component; // Ensure this line is included