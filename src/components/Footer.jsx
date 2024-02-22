export const Footer = () => {
    return (
        <footer className="bg-[#171718] h-[160px] items-center flex justify-center ">
            <div className="container ">
                <ul className="flex flex-row justify-center items-center gap-x-8 ">
                    <a href="#"><img src="/assets/socials/Vector.png" alt="" /></a>
                    <a href="#"><img src="/assets/socials/Vector1.png" alt="" /></a>
                    <a href="#"><img src="/assets/socials/Vector3.png" alt="" /></a>
                    <a href="#"><img src="/assets/socials/gitHub.svg" alt="" /></a>
                    <a href="#"><img src="/assets/socials/linkedIn.svg" alt="" /></a>
                </ul>
                <p className="text-white text-center mt-7">© 2024 frontend-dev.com</p>
            </div>
        </footer>
    )
}
