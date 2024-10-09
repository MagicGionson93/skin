import {CheckCircle2} from "lucide-react"
import video5 from "../assets/video5.mp4"
import { checklistItems } from "../constants"

const Workflow = () => {
  return (
    <div className="mt-10">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Accelerate your 
            <span className="heroTitle">{" "}coding workflow</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="flex p-2 w-full lg:w-1/2 justify-center">
                <video autoPlay loop muted className="w-2/3 border border-white mx-2 my-6">
                    <source src={video5} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="pt-12 w-full lg:w-1/2 ">
                {checklistItems.map((item, index) => (
                    <div key={index} className="flex mb-12 formDivWorkflow">
                        <div className="bgIconsWorflow mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                            <CheckCircle2 />
                        </div>
                        <div>
                            <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                            <p className="text-md text-neutral-500">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div id="Price"></div>
    </div>
  )
}

export default Workflow