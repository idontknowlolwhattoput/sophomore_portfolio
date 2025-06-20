import { useState } from "react";
import { motion } from "framer-motion";

import about from "../assets/img/about.svg";
import skills from "../assets/img/cv.svg";
import contacts from "../assets/img/contacts.svg";
import email from "../assets/img/email.svg";

import StartModal from "./StartModal";

const imageMap = {
  about,
  skills,
  contacts,
  email,
};

function Window() {


  const icons = [
    { iconname: "About me", src: "about", default: "about me" },
    { iconname: "CV/Skills", src: "skills", default: "about me" },
    { iconname: "Contacts", src: "contacts", default: "contacts" },
    { iconname: "Email me!", src: "email", default: "about me" },
  ];

  return (
   <div></div>
  );
}

export default Window;
