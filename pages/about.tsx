export default function about() {
    return (
        <div className="container-about">
            <div className="txt-container" dir="rtl">
                <h1 dir="rtl" className="about">אודותינו</h1>
                <p dir="rtl" >
                פריזמה פתרונות מתקדמים מספקת פתרונות דפוס, מיתוג ונראות למגוון רחב של תחומים, לתעשייה, למשרד ולבית.הניסיון הרב והמיומנויות שצוות החברה צבר לאורך השנים מאפשרים לנו להציע פתרונות פשוטים ומורכבים גם יחד לכל צורך, כולל פתרונות שניתן למצוא רק אצלנו, באיכות גבוהה ובשירות אדיב. אנחנו מציעים פתרונות בתחום שילוט הפנים, דפוס דיגיטלי, דפוס משי, פוטומטאל ועוד. כל מוצרי החברה מיוצרים בטכנולוגיות מתקדמות המאפשרות עבודה עם מגוון רחב של חומרים, במגוון גדלים וצורות, כשכל מוצר מותאם בדיוק לצורכי הלקוח ודרישותיו. מוצרי החברה עומדים בתווי התקן המחמירים ביותר. החברה מקיימת מערכת ניהול איכות על פי תקן ISO 9001:2015 והנה ספקית מאושרת של משרד הביטחון.<br/><br/>בין לקוחות החברה ניתן למצוא חברות גדולות וקטנות מתחום תעשיית האלקטרוניקה, הייטק, התעשייה הביטחונית, התעשייה הרפואית, חשמל, מזון, מסחר וקמעונאות.
                </p> 
            </div>
            <div>
                <h1  dir="rtl" className="our-team">הצוות שלנו</h1>
                <p className='our-team-p' dir="rtl">הצוות של פריזמה תמיד כאן בשבילך, ואנו מקפידים על מענה אדיב, קשוב לצרכים ולקשיים שלך, ומציעים ייעוץ, הדרכה וסיוע בכל שאלה ובמציאת הפתרון הנכון בשבילך ובשביל העסק שלך. </p>
                <div className="cards-container"> 
                
                    <div className="card">
                        <img src='https://www.prizma-il.com/wp-content/uploads/2018/10/RONIT.jpg' className="ceo"/>
                        <div>
                            <h1>רונית פרדי</h1>
                            <h4 dir="rtl" ><b>מנהלת תפעול</b></h4>
                            <h4 dir="rtl"><b>ronit@prizma2002.co.il</b></h4>
                        </div>
                    </div>

                    <div className="card">
                        <img src='https://www.prizma-il.com/wp-content/uploads/2018/10/IMG-20170905-WA0008.jpg' className="ceo"/>
                        <div>
                            <h1>יוסי כרמלי</h1>
                            <h4 dir="rtl"><b>מנהל שיווק</b></h4>
                            <h4 dir="rtl"><b>prizma2@prizma2002.co.il</b></h4>
                        </div>
                    </div>

                    <div className="card">
                        <img src='https://www.prizma-il.com/wp-content/uploads/2018/10/zachi.jpg' className="ceo"/>
                        <div>
                            <h1>צחי פולקובסקי</h1>
                            <h4 dir="rtl"><b>מנכ"ל פריזמה</b></h4>
                            <h4 dir="rtl"><b>zachi@prizma2002.co.il</b></h4>
                        </div>
                    </div>


                    {/* from now on need to create a div for them to be wraped in to */}
                    <div className="card" data-visible="true">
                        <img src='https://www.prizma-il.com/wp-content/uploads/2018/10/RINA-1-1003x1024.jpg' className="ceo"/>
                        <div>
                            <h1>רינה לב</h1>
                            <h4 dir="rtl"><b>עיצוב גרפי</b></h4>
                            <h4 dir="rtl"><b>rina@prizma2002.co.il</b></h4>
                        </div>
                    </div>


                    <div className="card" data-visible="true">
                        <img src='https://www.prizma-il.com/wp-content/uploads/2018/10/IMG-20170905-WA0004.jpg' className="ceo"/>
                        <div>
                            <h1>ג'וליאן בניון</h1>
                            <h4 dir="rtl"><b>מנהל ייצור</b></h4>
                            <h4 dir="rtl"><b>julien@prizma2002.co.il</b></h4>
                        </div>
                    </div>

                    <div className="card" data-visible="true">
                        <img src='https://www.prizma-il.com/wp-content/uploads/2018/10/photo.jpg' className="ceo"/>
                        <div>
                            <h1>אלה שאייר</h1> 
                            <h4 dir="rtl"><b>עיצוב גרפי</b></h4>
                            <h4 dir="rtl"><b>graphics@prizma2002.co.il</b></h4>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}