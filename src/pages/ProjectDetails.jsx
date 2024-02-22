import { useParams } from "react-router-dom"
import { projects } from '../components/Projects'
import { useEffect } from "react"


export const ProjectDetails = () => {

    
      
    const params = useParams()
    const id = params.id
    const project = projects.find((project) => project.id === Number(id))
    
    if (!project) {
        return <></>;
    }

    return (
        <div className="pb-10">
            <h1 className="text-center pt-[70px] font-dmsans text-6xl text-[#5C62EC]">{project.title}</h1>
            <img src={project.url} alt={project.title} className="w-[370px] h-[278px] rounded-xl mx-auto my-10"/>
            <p className="text-2xl text-center mb-7 font-bold">Skills: React, Node.js, MongoDB</p>
            <button className="items-center flex justify-center border-2 border-black rounded-md w-[169px] mx-auto h-12 b-16 gap-2 ">
                <img className='text-black' src="/assets/socials/gitHub-black.svg" alt="" />
                <p>GitHub repo</p>
            </button>
        </div>
    )
}