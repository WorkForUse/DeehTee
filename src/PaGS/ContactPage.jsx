import './ContactPage.css';
import { IoIosArrowRoundForward } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className='formContact'>
      <h1 className='FS_title'>Lets Contact Us</h1>
      <form className='FC_style'>

        <div className="name_identity">
          <div style={{ flex: 1 }}>
            <label>First Name</label>
            <input type="text" placeholder="Alexender" />
          </div>
          <div style={{ flex: 1 }}>
            <label>Last Name</label>
            <input type="text" placeholder="Grahambel" />
          </div>
        </div>

        <div className="name_identity">
          <div style={{ flex: 1 }}>
            <label>Email Address</label>
            <input type="email" placeholder="alexender@email.com" />
          </div>
        </div>

        <label>Message</label>
        <textarea placeholder="Lorem Ipsum is simply dummy text of the printing and........." />

        <button type='button'>Send Message <IoIosArrowRoundForward /></button>

      </form>
    </div>
  );
};

export default ContactPage;