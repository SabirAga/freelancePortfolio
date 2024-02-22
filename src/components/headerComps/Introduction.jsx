<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet"></link>

export const Introduction = () => {
    return (
        <>
            <div className="bg-[url(assets/Abstract.png)] bg-center bg-no-repeat flex flex-col gap-y-5 items-center justify-center h-[calc(100vh+31px)] ">
                <p className="text-white font-dmsans font-bold text-6xl text-center">Hi, my name is <span className="text-sky-400">Sabir</span></p>
                <p className="text-white font-dmsans font-bold text-4xl text-center ">a frontend developer</p>
                <p className="text-white font-dmsans font-bold text-lg text-center ">with passion for learning and creating.</p>
                <button className="bg-[#5C62EC] rounded-lg px-7 py-3 shadow text-white text-base hover:bg-[#7662e7] hover:scale-105">Download CV</button>
            </div>
        </>
    )
}