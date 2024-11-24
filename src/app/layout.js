import "./globals.css";
import Footer from "./component/Footer";
import Navbar from './component/Navbar';

export const metadata = {
  title: "Glint4u",
  description: "We Make Tech Feel Better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
