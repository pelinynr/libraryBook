import { Link } from "react-router-dom";
import ScrollToTopButton from "../UI/TopButton";


const Footer = () => {
  return (
    <footer className="w-full bg-gray-600 p-8 absolute bottom-0 right-0 left-0 footer">
      <div className="w-[95%] flex justify-between m-auto items-center">
        <ScrollToTopButton />
      </div>
    </footer>
  );
};

export default Footer;
