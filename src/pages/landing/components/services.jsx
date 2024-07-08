import { Handshake } from "lucide-react";
import K from "../../../constants";

const Services = () => {
  return (
    <div>
      {
       K.SERVICES.map(
          (service, index) => {
            return <div className="flex flex-row py-10" 
            key={index} 
          
            style={{backgroundColor: service.bgColor}}
            >
              <span className="">
                <Handshake className="h-20 w-20 bg-amber-400 pl-7 rounded-full" />
              </span>

              <h3 className="px-7 pb-3 pt-1 text-[24px] font-bold" >
                {service.title}
              </h3>
              <p className="px-7 text-[20px]">{service.description}</p>
            </div>
          }
        )
      }
    </div>
  )

};



export default Services;