import ContactForm from "@/components/ContactForm";

export default function Contact() {

  return (
    <div>
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
    </div>
  );
}
