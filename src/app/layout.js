import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='min-h-full flex flex-col'>
        <nav>
          <ul>
            <li>About</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
