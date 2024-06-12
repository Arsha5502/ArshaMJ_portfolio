import { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
// import { FadeIn } from "./FadeIn";


const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = (email) => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      // Reset error message
      setErrMsg("");

      // formspree
      fetch("https://formspree.io/f/xpzvbaqg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          phoneNumber,
          email,
          subject,
          message,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Clear input fields
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
            // Set success message
            setSuccessMsg(
              `Thank you dear ${username}, Your message has been sent successfully!`
            );
            // Clear success message after 5 seconds
            setTimeout(() => {
              setSuccessMsg("");
            }, 5000);
          } else {
            // Handle error response
            setErrMsg("Failed to send message. Please try again later.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setErrMsg("Failed to send message. Please try again later.");
        });
    }
  };

  return (
    <section
      id="contacts"
      className="w-full py-10 border-b-[1px] border-b-gray-700"
    >
      <div className="flex justify-center items-center text-center">
      <Title title="Connect With Me" des=" CONTACT" />
      </div>
      <div className="w-full flex flex-cols gap-3">
      <ContactLeft />
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#3A224B] to-[#3A224B] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-purple-lg">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-purple-lg text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-purple-lg text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required!" &&
                      "outline-designColor"
                    } contactInput rounded-lg`}
                    type="text"
                    style={{ color: "black", backgroundColor: "#D7B1F1", fontFamily: "sans-serif" }}
                  />
                </div>
                {/* <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    style={{ color: "black", backgroundColor: "#D7B1F1", fontFamily: "sans-serif" }}
                  />
                </div> */}
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput rounded-lg`}
                  type="email"
                  style={{ color: "black", backgroundColor: "#D7B1F1", fontFamily: "sans-serif" }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput rounded-lg`}
                  type="text"
                  style={{ color: "black", backgroundColor: "#D7B1F1", fontFamily: "sans-serif" }}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea rounded-lg`}
                  cols={30}
                  rows={8}
                  style={{ color: "black", backgroundColor: "#D7B1F1", fontFamily: "sans-serif" }}
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#251630] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-gray-600 border"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
