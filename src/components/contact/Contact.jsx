import { useState } from "react";

import "./contact.scss";

export const Contact = () => {
  const [message, setMesage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMesage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
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
