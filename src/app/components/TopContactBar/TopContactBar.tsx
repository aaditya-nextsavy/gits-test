import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";


const TopContactBar = () => {
    return (

        <>
        
        <div className="top-contact-bar-wrapper">
            <nav aria-label="Contact information">

                <a href="mailto:support@example.com"> <span className="mr-1" ><AiOutlineMail /></span> support@example.com  <span className="hover-arrow"><HiOutlineChevronRight />
                </span></a>
                <a href="tel:+919999999999"><span className="mr-1"><FiPhone /> </span>+91 99999 99999 <span className="hover-arrow"><HiOutlineChevronRight />
                </span></a>
                <a href="https://wa.me/9311358385 " target="_blank" rel="noopener">
                    <span className="mr-1"><FaWhatsapp /></span> +91 9311358385 <span className="hover-arrow"><HiOutlineChevronRight />
                    </span>
                </a>
            </nav>
        </div>

        
        
        </>

    )
}


export default TopContactBar

