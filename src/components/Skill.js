import react from "react";
export const Skill=()=>{
  let arr=["Problem Solver","Teamwork","Adaptive","Creative"];
    return (<div className="justify-center max-w-4xl py-8 mx-auto" >
    <p className="pt-4 text-2xl font-semibold text-center text-gray-100 sm:text-4xl">Soft Skills</p>
    <div className="flex flex-wrap justify-center pt-2">
      {arr.map((e)=>{
        return (
          <div className="flex flex-col w-40 p-4 m-2 overflow-hidden bg-white rounded-full shadow-2xl sm:w-52 hover:scale-105">
             <p className="mt-1 text-xl font-semibold text-center sm:text-xl">{e}</p>
          </div>
        );  
      })}
    </div>
</div>);
}