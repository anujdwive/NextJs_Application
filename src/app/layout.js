import Link from "next/link";

export default function RootLayout({ children, notification }) {
  return (
    <html lang='en'>
      <body>
        <nav>
          <ul>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/product"}>
              {" "}
              <li>Product</li>
            </Link>
            <Link href={"/users"}>
              {" "}
              <li>Users</li>
            </Link>
          </ul>
        </nav>
        {children}
        {notification}
      </body>
    </html>
  );
}
