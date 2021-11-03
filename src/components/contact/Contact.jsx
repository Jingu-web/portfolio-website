import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./contact.scss";

export const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  // const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        formRef.current,
        "user_ZW2bFjjAULulrcyJivffK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          // setValue("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">送信</button>
          {done && (
            <span>
              ご連絡ありがとうございます。
              <br />
              メール確認次第追ってご連絡差し上げます。
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
