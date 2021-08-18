import Rightdown from '../images/right-down.svg';
function Thirdsection() {
    return (
        <div>
            <section class="text-gray-600 body-font bg-gray-100">
                <div class="container mx-auto flex md:px-20 lg:px-20 px-6 py-10 md:flex-row flex-col items-center w-full h-screen  md:mt-0 lg:mt-0">
                    <div class="lg:flex-grow md:w-1/2 xl:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16  md:mb-0 items-center text-center">
                        <h1 class="title-font  md:text-5xl lg:text-5xl 2xl:text-5xl text-3xl mb-4 font-bold text-black">Where hanging out is easy</h1>
                        <p class="mb-8 leading-relaxed text-black md:text-xl lg:text-xl text-xl">Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
                        </p>
                    </div>
                    <img class="sm:w-9/12 md:w-9/12" alt="TV" src={Rightdown} />
                </div>
            </section>
        </div>
    );
}
export default Thirdsection;