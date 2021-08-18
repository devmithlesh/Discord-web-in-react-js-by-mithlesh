import Logo from '../images/discord-logo.png';
function Header() {
    return (
        <div>
            <div className="w-full h-5/6 bg-gray-900 pb-28">
                <div className="container mx-auto flex justify-between flex-row md:flex-row items-center px-10 py-6">
                    <a className="flex title-font font-medium items-center xl:text-2xl text-white mb-4 md:mb-0">
                        <img src={Logo} alt="discord" className="w-10 2xl:w-20 mr-2" />DISCORD
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:text-base lg:text-base 2xl:text-2xl justify-center text-white cursor-default hidden md:inline-block lg:inline-block">
                        <a className="mx-2 cursor-pointer py-2 px-2">Download</a>
                        <a className="mx-2 cursor-pointer py-2 px-2">Why Discord?</a>
                        <a className="mx-2 cursor-pointer py-2 px-2">Nitro</a>
                        <a className="mx-2 cursor-pointer py-2 px-2">Safety</a>
                        <a className="mx-2 cursor-pointer py-2 px-2">Support</a>
                    </nav>
                    <button className=" bg-gray-100 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base 2xl:text-2xl mb-2 md:mt-0">Login
                    </button>
                </div>
                <div className="flex justify-center items-center text-white flex-col pt-10 sm:pt-10 md:pt-24 lg:pt-24 2xl:pt-24">
                    <div className="text-3xl  md:text-5xl lg:text-5xl xl:text-7xl font-bold md:mb-16 lg:mb-16 mb-6 text-center ">Your place to talk</div>
                    <form className="w-full items-center flex justify-center flex-col">
                        <div className="text-sm md:text-base lg:text-base 2xl:text-2xl mb-16 text-center tracking-wider w-3/4 ">Whether you’re part of a school club, gaming group, worldwide art community, or just a <br /> handful of friends that want to spend time together, Discord makes it easy to talk every day <br /> and hang out more often.</div>
                        <div className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row  items-center justify-center">
                            <a href="#" className="py-4 px-10 bg-white text-black text-lg text-center rounded-full md:mr-4 lg:mr-4"> <i className="fas fa-download"></i> &nbsp; Download for Linux</a>
                            <a href="#" className="py-4 px-6 bg-black text-lg text-center rounded-full md:ml-4 lg:ml-4 md:mt-0 lg:mt-0 mt-10">Open Discord in your browser </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Header;