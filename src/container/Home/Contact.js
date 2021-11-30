import React,{useRef} from "react";
import emailjs from "emailjs-com";
import "../../style/contact.css";
function Contact() {
    const form = useRef();
    const send_email = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_5xvzgt4",
            "template_4lz61h9",
            form.current,
            "user_oTOTIL1wQiNiD8X9qTmfw"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        e.target.reset();
      };
  return (
    <div className="contact_main_page" id="contact">
      <div className="contact_main_head">
        <h1>Contact me</h1>
      </div>
      <form className="contact_main_mid" onSubmit={(e) => send_email(e)} ref={form}>
        <div className="contact_name">
          <input
          name = "from_name"
            type="text"
            placeholder="Name"
            onFocus={() => {
              document.getElementById("form_line_one").style.transform =
                "scaleX(1)";
            }}
          />
          <div id="form_line_one"></div>
        </div>
        <div className="contact_email">
          <input name="from_email" type="email" placeholder="email" onFocus={() => {
              document.getElementById("form_line_two").style.transform =
                "scaleX(1)";
            }}/>
            <div id="form_line_two"></div>
        </div>
        <div className="contact_subject">
          <input name="subject" type="text" placeholder="subject" onFocus={() => {
              document.getElementById("form_line_three").style.transform =
                "scaleX(1)";
            }}/>
            <div id="form_line_three"></div>
        </div>
        <textarea name="message" className="contact_text" placeholder="messege" />
        <div className="form_button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
