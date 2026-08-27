import React from "react";

const AboutLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <h1>This is about layout</h1>
        {children}
      </body>
    </html>
  );
};

export default AboutLayout;
