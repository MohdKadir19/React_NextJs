import React from "react";

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <div>
          <h1>Hello, Next.js! this is about main page</h1>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
