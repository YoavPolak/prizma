import { useEffect, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import ContactForm from "./ContactForm";

const images: string[] = [
  "http://spaceflightnow.com/wp-content/uploads/2022/09/20220921soyuzms22launch.jpg",
  "https://www.gannett-cdn.com/presto/2018/09/07/PBRE/2a0dc85f-d649-49fe-9c0a-843cf84c07a0-telstar19v_launch1.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
  "https://cdn.mos.cms.futurecdn.net/4MLyNZ66GSMUp7z49Q8k3K.jpg",
  "https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print"
];

export default function Landing () {
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateCurrentIndex = (direction: boolean) => {
        if (direction) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    useEffect(() => {
    const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => {
        clearTimeout(timer);
    };
    }, [currentIndex]);


    //   const openButton = document.querySelector("[data-open-modal]")
    //   const modal = document.querySelector("[data-modal]")

    function dataModal (id: string) {
        const modal = document.querySelector("[data-modal]") as HTMLDialogElement
        modal.showModal()

        document.getElementById(id)?.setAttribute('data-visble', 'true')
    }

    function closeDataModal(id : string) {
        const modal = document.querySelector("[data-modal]") as HTMLDialogElement
        modal.close()

        document.getElementById(id)?.setAttribute('data-visble', 'false')
    }


    return (
    <>
        <div
        className="landing" id='landing' data-visble="false"
        style={{ backgroundImage: `url(${images[currentIndex % images.length]})` }}
        >
        {/* <h1 className="test">Welcome to Prizma</h1> */}

        {/* <button className='start-button' onClick={() => {dataModal('landing')}} data-open-modal>צור קשר</button> */}

        <dialog data-modal className="modal">
            <ContactForm/>
            <button className='exit-button' onClick={() => {closeDataModal('landing')}}>X</button>
        </dialog>

        <div className="text-container">         
            <div className="cool-text-container">
                <h2 className="simple-cool-text">Prizma</h2>
                <h2 className="simple-cool-text">&amp; Cool</h2>
            </div>   
            <p className="lorem-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                gravida, odio id lacinia tristique, nunc odio fermentum nisi, ac
                luctus felis nisl id nunc. Sed non quam lacus. In volutpat sapien
                et cursus semper. Nulla facilisi. Nullam nec sem purus.
            </p>
            <button className="start-button" onClick={() => {dataModal('landing')}} data-open-modal>Get Started<BsChevronCompactRight size={19}/></button>
        </div>




        {/* Left Arrow */}
        <div className="left-arrow">
            <BsChevronCompactLeft
            onClick={() => updateCurrentIndex(false)}
            size={30}
            />
        </div>
        {/* Right Arrow */}
        <div className="right-arrow">
            <BsChevronCompactRight
            onClick={() => updateCurrentIndex(true)}
            size={30}
            />
        </div>
        </div>
    </>
    );
};