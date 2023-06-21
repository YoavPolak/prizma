import ContactForm from "@/components/ContactForm";

export default function Contact() {

  return (
    <div className="contact-container">
      <ContactForm/>

      <div dir='rtl' className="fancy-paragraph">
        {/* <p>פריזמה פתרונות מתקדמים
          טלפון: 03-9529242
          פקס: 03-9529243
          כתובת: השר חיים שפירא 1 ראשון לציון. 
          (לשים בוויז "פריזמה פתרונות מתקדמים)
        </p> */}
        <p>פריזמה פתרונות מתקדמים</p>
        <p>טלפון: 03-9529242</p>
        <p>פקס: 03-9529243</p>
        <p>כתובת: השר חיים שפירא 1 ראשון לציון. 
          (לשים בוויז פריזמה פתרונות מתקדמים)</p>
      </div>
      {/* buttons */}
      {/* <div>
        <button onClick={() => {window.open('https://www.facebook.com/prizma.il/')}}>facebook</button>

        <button  className='waze-button' onClick={() => {window.open('https://www.waze.com/he/live-map/directions?navigate=yes&to=ll.31.99383685%2C34.74998116')}}>
        <span className="icon"></span>Open in Waze</button>
      </div> */}

    </div>
  );
}
