import React from "react";
import style from "./contact.module.css";
import Image from "next/image";

// Metadata for SEO
export const metadata = {
  title: "Contact Us",
  description: "Contact us for any questions or inquiries",
  authors: [
    {
      name: "Mohd",
      url: "https://johndoe.com",
    },
    {
      name: "Kadir",
      url: "https://johndoe.com",
    },
  ],
  keywords: ["contact", "inquiries", "questions"],
};

const page = () => {
  return (
    <div className={style.contact}>
      <div className="w-50 h-50">
        <Image
          src="/center-img.png"
          width={500}
          height={500}
          alt="contact"
          full
        />
      </div>
    </div>
  );
};

export default page;
