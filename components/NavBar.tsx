import Link from "next/link";
import { useState, useEffect} from "react";
import { useRouter } from "next/router";
import { BsChevronCompactDown } from "react-icons/bs";


export default function NavBar () {

    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();


    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrolled(scrollPosition > 0);
        };
  
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    function toggle() {
        const navBar : any = document.querySelector("nav");
        const visibilty : any = navBar?.getAttribute("data-visible");
        const button: any = document.querySelector("button");

        if(visibilty === "true") {
            navBar?.setAttribute('data-visible','false');
            button.setAttribute("aria-expanded", "false")
        } else {
            navBar?.setAttribute('data-visible','true');
            button.setAttribute("aria-expanded", "true")
        }
    }

    function toggleDropdown (id : string, secId : string) {
        let dropdown = document.getElementById(id);
        let visibilty = dropdown?.getAttribute('data-visble')

        if(visibilty === "true") {
            dropdown?.setAttribute('data-visble','false');
        } else {
            dropdown?.setAttribute('data-visble','true');
        }

        let secDropdown = document.getElementById(secId);
        let secVisibilty = dropdown?.getAttribute('data-visble')
        if(secVisibilty === 'true') {
            secDropdown?.setAttribute('data-visble','false');
        }
    }

    function offDropdowns (id : string, secId : string) {
        let dropdown = document.getElementById(id);
        dropdown?.setAttribute('data-visble','false');
        let secDD = document.getElementById(secId);
        secDD?.setAttribute('data-visble','false');
    }
    

    return (
        <div id='nav'>  
            <button className="mobile-nav-toggle" aria-controls="primary-nav" aria-expanded="false" onClick={() => {toggle()}}><span className="sr-only"></span></button>
            <Link className="prizma-logo" id="logo" href=".."></Link>

            <nav className={`${scrolled ? "navbar-scrolled" : ""}`} id="primary-nav" dir="rtl" data-visible="flase" >
                <Link onClick={() => {offDropdowns('dropdown-defus', 'dropdown-shilut')}} className={`navItem ${router.pathname === "/" ? "active" : ""}`} href="..">עמוד הבית</Link>
                <Link onClick={() => {offDropdowns('dropdown-defus', 'dropdown-shilut')}} className={`navItem ${router.pathname === "/about" ? "active" : ""}`} href="about">אודות פריזמה</Link>

                <div className="dropdown" data-visble='true'>
                    <Link onClick={() => {toggleDropdown('dropdown-defus', 'dropdown-shilut')}} className="navItem" href="">פתרונות דפוס מתקדמים<BsChevronCompactDown size={15} className="drop-arrow"/></Link>
                    <div id='dropdown-defus' onClick={() => {toggleDropdown('dropdown-defus', 'dropdown-shilut')}} className="dropdown-menu" data-visble="false">
                        <Link className="dropdownItem" href="/aps/Photometal">פוטומטאל</Link>
                        <Link className="dropdownItem" href="/aps/Lexan">לקסן</Link>
                        <Link className="dropdownItem" href="/aps/מדבקות-וקריסטל-דום">מדבקות וקריסטל דום</Link>
                        <Link className="dropdownItem" href="/aps/הדפסה-על-מארזים-ומכשירים">הדפסה על מארזים ומכשירים</Link>
                        <Link className="dropdownItem" href="/aps/מוצרי-מיתוג-פרסום">מוצרי מיתוג ופרסום</Link>
                        <Link className="dropdownItem" href="/aps/פתרונות-מיוחדים">פתרונות מיוחדים</Link>
                    </div>
                </div>


                <div className="dropdown">
                    <Link onClick={() => {toggleDropdown('dropdown-shilut', 'dropdown-defus')}} className="navItem" href="">שילוט<BsChevronCompactDown size={15} className="drop-arrow"/></Link>
                    <div id='dropdown-shilut' onClick={() => {toggleDropdown('dropdown-shilut', 'dropdown-defus')}} className="dropdown-menu" data-visble="false">
                        <Link className="dropdownItem" href="/Signage/Buildings">שילוט מבנים</Link>
                        <Link className="dropdownItem" href="/Signage/Interior">שילוט פנים</Link>
                        <Link className="dropdownItem" href="/Signage/Parks">שילוט פארקים וגנים</Link>
                        <Link className="dropdownItem" href="/Signage/Courts">שילוט חניונים</Link>
                    </div>
                </div>



                <Link onClick={() => {offDropdowns('dropdown-defus', 'dropdown-shilut')}} className={`navItem ${router.pathname === "/Qualty" ? "active" : ""}`} href="Qualty">איכות ISO 9001</Link>
                <Link onClick={() => {offDropdowns('dropdown-defus', 'dropdown-shilut')}} className={`navItem ${router.pathname === "/Contact" ? "active" : ""}`} href="Contact">צור קשר</Link>
            </nav>
        </div>
    )
}

