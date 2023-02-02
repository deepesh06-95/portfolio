import react from "react";
import Particles from "react-tsparticles";
import { particlesConfig } from "../config/particle-config";
export const PartcleBackground=()=>{
 return (
     <Particles params={particlesConfig}></Particles>
 );
}