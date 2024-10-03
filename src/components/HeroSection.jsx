import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import video3 from "../assets/video3.mp4"
import video4 from "../assets/video4.mp4"
import video5 from "../assets/video5.mp4"
import video6 from "../assets/video6.mp4"



const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide drop-shadow-xl">
        Glow and Hydration: 
        <span className="heroTitle">{" "}The Skincare You Deserve</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl tracking-wide">
      Your skin is a reflection of your journey—nurture it with the balance and care it deserves. Every routine is a ritual, a moment of selfcare, bringing you closer to the confidence that radiates from within.
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="contactColor py-3 px-4 mx-3 border border-white drop-shadow-xl">
          Start for free
        </a>
        <a href="#" className="contactColor py-3 px-4 mx-3 border border-white drop-shadow-xl">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="w-1/2 border border-white shadow-green-400 mx-2 my-4">
          <source src={video3} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="w-1/2 border border-white shadow-green-400 mx-2 my-4">
          <source src={video4} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default HeroSection