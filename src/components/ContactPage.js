import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { personalInfo, publicUrls } from "../constants"; 
import SplineCanvas from "./SplineGlobe"; 
import Modal from "./Modal"; 
import emailjs from "@emailjs/browser";
import './ContactPage.css';  // Import the new CSS file

const ContactPage = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "", buttonText: "" });
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  console.log(serviceId); // This should log the service ID if it's set correctly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

    emailjs
      .send(
        'service_cexq35l',
        'template_gc1x5of',
        {
          from_name: form.name,
          to_name: personalInfo.fullName,
          from_email: form.email,
          to_email: personalInfo.email,
          message: form.message,
          reply_to: form.email,
        },
        '2fWH5krX9ytVBvEqP'
      )
      .then(
        () => {
          setModalContent({
            title: "Success!",
            message: "Thank you. I will get back to you as soon as possible.",
            buttonText: "Ok",
          });
          setIsModalVisible(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Error while sending mail ", error);
          setModalContent({
            title: "Error!",
            message: "Ahh, something went wrong. Please try again.",
            buttonText: "Retry",
          });
          setIsError(true);
          setIsModalVisible(true);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="xl:my-20 pl-10 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="relative flex-[0.75] bg-[#3c3838] p-8 rounded-2xl">
          <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
            {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
              const profile = publicUrls.socialProfiles[socialProfile];
              return (
                <div
                  key={`social_${profile.title}`}
                  onClick={() => window.open(profile.link, "_blank")}
                  className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
                >
                  <img src={profile.icon} alt={`social_${profile.title}`} className="w-4/6 h-4/6 object-contain" />
                </div>
              );
            })}
          </div>

          <p className="text-[#FFDBBB]">GET IN TOUCH</p>
          <h3 className="text-[#807070] mt-2 text-6xl font-bold">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-3 flex flex-col gap-5">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-3 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-3 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-3 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold w-fit shadow shadow-primary">
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <SplineCanvas />
        </motion.div>
      </div>

      {isModalVisible && (
        <Modal title={modalContent.title} message={modalContent.message} buttonText={modalContent.buttonText} isError={isError} setIsModalVisible={() => setIsModalVisible(false)} />
      )}
    </>
  );
};

export default SectionWrapper(ContactPage, "contact");
