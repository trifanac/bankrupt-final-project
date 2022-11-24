import React from "react";
import useInput from "../hooks/useInput";

function Contact() {
  const [userName, bindUserName, resetUserName] = useInput("");
  const [userEmail, bindUserEmail, resetUserEmail] = useInput("");
  const [userMessage, bindUserMessage, resetUserMessage] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${userName} (${userEmail}), your message: "${userMessage}" was sent to us! We will get back to you as soon as possible!`
    );
    resetUserName();
    resetUserEmail();
    resetUserMessage();
  };

  return (
    <div
      id="Contact"
      className="flex items-center justify-center min-h-screen py-8"
    >
      <div className=" mx-4 lg:mx-10">
        <h2 className="text-3xl lg:text-5xl font-medium leading-normal mb-2 lg:mb-4 text-center capitalize">
          Contact us
        </h2>
        <h3 className="text-lighterIndigo text-2xl lg:text-4xl font-medium leading-normal mb-8 lg:mb-16 text-center">
          Leave us a message, and we&apos;ll get back to you as soon as possible
        </h3>
        <form
          className="flex flex-col text-lg lg:text-2xl"
          onSubmit={submitHandler}
        >
          <label className="mb-2">Name</label>
          <input
            {...bindUserName}
            className="text-darkestIndigo mb-4 p-2"
            type="text"
            name="from_name"
          />

          <label className="mb-2">Email</label>
          <input
            {...bindUserEmail}
            className="text-darkestIndigo mb-4 p-2"
            type="email"
            name="from_email"
          />

          <label className="mb-2">Message</label>
          <textarea
            className="text-darkestIndigo mb-8 p-4"
            name="message"
            {...bindUserMessage}
          />

          <button className="bg-indigo-500 p-4 hover:bg-indigo-700 hover:text-white duration-300 cursor-pointer">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
