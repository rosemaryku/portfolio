import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#F7E9D7] flex justify-center items-center p-4 text-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/3b4422f0-3de7-4bec-96fd-599adb4a4df4"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
            CONTACT
          </p>
          <br />
          <br />
          <i>Feel free to send me a message - I'm always happy to connect!</i>
        </div>
        <input
          className="bg-[#ffffff] border-[#ffffff] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ffffff] my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textArea
          className="bg-[#ffffff] p-2"
          placeholder="Message"
          name="message"
        />
        <button className="text-white px-14 py-3 my-6 mx-auto flex items-center bg-[#827397]  border-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
          SEND
        </button>
      </form>
    </div>
  );
};

export default Contact;
