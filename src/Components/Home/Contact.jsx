import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from "@iconify/react";

function Contact() {
  const form = useRef();
  const [status, setStaus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zbhd7ha",
        "template_clzido9",
        form.current,
        "5p1O3oexZzTKz1-0k"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStaus("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setStaus("Sorry! There is a problem sending message. ");
        }
      );
  };
  return (
    <div className="mb-20">
      <h2 className="text-center font-normal text-4xl mb-10 lg:mb-0 text-white rainbow-text mt-28">
        Get In Touch
      </h2>
      <p className="text-white mx-96 my-5 text-center">
        If you have any inquiries, wish to engage my services, or simply want to
        extend a greeting, I will make every effort to promptly respond to you!
      </p>

      <div className=" rounded-md p-6 w-3/5 mx-auto">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex gap-5">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-1/2 py-3 px-4 bg-[#161B1F] text-white rounded-sm"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-1/2 py-3 px-4 bg-[#161B1F] text-white rounded-sm"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="w-full my-5 bg-[#161B1F] p-4 text-white rounded-sm"
            rows="6"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#01FEE2] text-[#161b1f] text-xl py-3 px-6 rounded-md font-semibold flex gap-2 hover:bg-[#01CBB4] w-full lg:w-auto justify-center items-center"
            >
              Send
              <Icon
                icon="fluent:send-16-filled"
                style={{ color: "#161b1f", fontSize: "20px" }}
              />
            </button>
          </div>
          <p className="text-white text-xl font-light text-center">{status}</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
