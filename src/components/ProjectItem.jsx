import { useNavigate } from "react-router-dom"

export const ProjectItem = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => {
                navigate(`/projects/${props.id}`)
            }} className=" bg-white  rounded-2xl w-[370px] shadow-xl hover:scale-105 transition">
                <img className="w-[370px] h-[278px] rounded-xl" src={props.url} />
                <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">{props.title}</p>
            </div>
        </>

    )
}