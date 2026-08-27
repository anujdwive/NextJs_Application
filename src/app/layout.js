export default function RootLayout({ children, notification }) {
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
        {notification}
      </body>
    </html>
  );
}
