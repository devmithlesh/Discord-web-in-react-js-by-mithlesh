import thirdleft from '../images/third-left.svg';
function Forthsection() {
    return (
        <div>
            <section class=" body-font">
                <div class="container mx-auto flex md:px-20 lg:px-20 px-6 py-24 md:flex-row flex-col items-center w-full">
                    <img class="sm:w-9/12 md:w-9/12 w-full mb-10" alt="hero" src={thirdleft} />
                    <div class="lg:flex-grow md:w-1/2 xl:w-full lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center text-black">
                        <h1 class="title-font md:text-5xl lg:text-5xl 2xl:text-5xl text-3xl mb-4 font-bold ">From a few to a fandom</h1>
                        <p class="mb-8 leading-relaxed  md:text-xl lg:text-xl text-xl">Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Forthsection;