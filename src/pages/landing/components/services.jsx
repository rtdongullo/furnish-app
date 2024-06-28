import { HeartHandshake } from "lucide";
import K from "../../../constants";

const Services = () => {
  return (
    <div>
      {
       K.SERVICES.map(
          (service, index) => {
            return <div key={index}>
              <HeartHandshake />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          }
        )
      }
    </div>
  )

};



export default Services;