import { ProjectItem } from "./ProjectItem"
export const projects = [
    {
        id:1,
        title: 'Gaming streaming portal',
        url: '/assets/projects/01.jpg',
    },
    {
        id:2,
        title: 'Video service',
        url: '/assets/projects/02.jpg',
    },
    {
        id:3,
        title: 'Video portal',
        url: '/assets/projects/03.jpg',
    },
    {
        id:4,
        title: 'Dating app',
        url: '/assets/projects/04.jpg',
    },
    {   
        id:5,
        title: 'Landing',
        url: '/assets/projects/05.jpg',
    },
    {
        id:6,
        title: 'Gaming community',
        url: '/assets/projects/06.jpg',
    },
]

export const Projects = () => {
    return (
        <div id='projects' className="h-min w-[1170] pb-[70px] dark:bg-stone-500 bg-[#E5E5E5] ">
            <h1 className="text-[#5C62EC] pt-16 pb-16 font-dmsans font-bold text-[40px] text-center dark:text-[#66f0ff]">Projects</h1>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-[30px] gap-x-[30px] justify-items-center  ">
                {projects.map(({ title, url, id }) => (
                    <ProjectItem key={id} id={id} title={title} url={url} />
                ))}

            </div>
        </div>
    )
}

{/* <div className=" bg-white  rounded-2xl w-[370px] shadow-xl">
                        <img className="w-[370px] h-[278px] rounded-xl" src={url} />
                        <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">{title}</p>
                    </div> */}
{/*                 
                <div className=" bg-white border-2 rounded-xl w-[370px]">
                    <img className="w-[370px] h-[278px] rounded-xl" src="assets/projects/02.jpg" />
                    <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">Video service</p>
                </div>
                <div className=" bg-white border-2 rounded-xl w-[370px]">
                    <img className="w-[370px] h-[278px] rounded-xl" src="assets/projects/03.jpg" />
                    <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">Video portal</p>
                </div>
                <div className=" bg-white border-2 rounded-xl w-[370px]">
                    <img className="w-[370px] h-[278px] rounded-xl" src="assets/projects/04.jpg" />
                    <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">Dating app</p>
                </div>
                <div className=" bg-white border-2 rounded-xl w-[370px]">
                    <img className="w-[370px] h-[278px] rounded-xl" src="assets/projects/05.jpg" />
                    <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">Landing</p>
                </div>
                <div className=" bg-white border-2 rounded-xl w-[370px]">
                    <img className="w-[370px] h-[278px] rounded-xl" src="assets/projects/06.jpg" />
                    <p className="pt-[15px] pb-[25px] ml-5 font-dmsans text-black font-bold text-2xl">Gaming community</p>
                </div> */}