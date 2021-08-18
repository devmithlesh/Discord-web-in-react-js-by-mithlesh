import fullback from '../images/full-back.svg';
function Sixthsection() {
    return (
        <div>
            <section class="bg-gray-100">
                <div class="flex flex-col items-center justify-center w-full text-center py-10  md:mt-0 lg:mt-0 md:px-20 lg:px-20 px-6">
                    <h1 class="md:text-5xl lg:text-5xl text-3xl font-bold mb-4 xl:mb-10 2xl:text-7xl tracking-widest">Reliable tech for staying close</h1>
                    <p class="md:text-xl lg:text-xl 2xl:text-3xl  text-base md:px-28 lg:px-28 ">Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
                </div>
                <div class="w-full h-full flex justify-center px-10">
                    <img src={fullback} alt="just-chillin" class="w-screen" />
                </div>
                <div class="w-full flex items-center justify-center text-center flex-col py-20 px-6">
                    <h1 class="text-3xl mb-10 font-bold">Ready to start your journey?</h1>
                    <a href="#" class="py-4 px-16 rounded-full bg-blue-700 text-white">   <i class="fas fa-download"></i>&nbsp; Download for linux</a>
                </div>
            </section>
        </div>
    );
}
export default Sixthsection;