import React from "react";
import { FaLocationArrow, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-lime-100 p-6">
      <h1 className="flex justify-center items-center text-xl font-bold">
        Bize Ulaşın
      </h1>
      <div>
        <div className="flex justify-center items-center gap-1">
          <FaLocationArrow />
          <p className="flex justify-center items-center">
            Rauf Denktaş Bulvarı 87/A Muratpaşa / ANTALYA
          </p>
        </div>

        <div className="flex justify-center items-center gap-1">
          <FaPhoneAlt />
          <a href="tel:902423240777" className="text-blue-500">
            0242 324 07 77
          </a>
        </div>
        <div className="flex justify-center items-center gap-1">
          <FaMailBulk />
          <a href="mailto:info@paymyres.com" className="text-blue-500">
            info@paymyres.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
