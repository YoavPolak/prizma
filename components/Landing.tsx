import { useEffect, useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import ContactForm from "./ContactForm";
import { HiArrowNarrowRight } from "react-icons/hi";

const images: string[] = [
  // "http://spaceflightnow.com/wp-content/uploads/2022/09/20220921soyuzms22launch.jpg",
  // "https://www.gannett-cdn.com/presto/2018/09/07/PBRE/2a0dc85f-d649-49fe-9c0a-843cf84c07a0-telstar19v_launch1.jpg?width=1200&disable=upscale&format=pjpg&auto=webp",
  // "https://cdn.mos.cms.futurecdn.net/4MLyNZ66GSMUp7z49Q8k3K.jpg",
  // "https://www.eea.europa.eu/highlights/eight-facts-about-europe2019s-forest-ecosystems/image_print"
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
    <div className="t">
        <div
        className="landing" id='landing' data-visble="false"
        // style={{ backgroundImage: `url(${images[currentIndex % images.length]})` }}
        >

        {/* <button className='start-button' onClick={() => {dataModal('landing')}} data-open-modal>צור קשר</button>

        <dialog data-modal className="modal">
            <ContactForm/>
            <button className='exit-button' onClick={() => {closeDataModal('landing')}}>X</button>
        </dialog> */}

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          YOAV POLAK
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I&apos;m a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I&apos;m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I&apos;m focused on
          building responsive full-stack web applications.
        </p>
        </div>
        <div className=" flex items-center flex-col relative bottom-[25%] sm:bottom-[25%] md:bottom-[32%] z-index 9999 " >
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
            style={{ zIndex: 9999 }}
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>


        {/* Left Arrow */}
        {/* <div className="left-arrow">
            <BsChevronCompactLeft
            onClick={() => updateCurrentIndex(false)}
            size={30}
            />
        </div> */}
        {/* Right Arrow */}
        {/* <div className="right-arrow">
            <BsChevronCompactRight
            onClick={() => updateCurrentIndex(true)}
            size={30}
            />
        </div> */}


            {/* <img className='clients' alt="Prizma Clients" src="https://www.prizma-il.com/wp-content/uploads/2019/01/%D7%9C%D7%95%D7%92%D7%95%D7%90%D7%99%D7%9D-01-1024x595.png"/> */}
        </div>
    </div>
    );
};