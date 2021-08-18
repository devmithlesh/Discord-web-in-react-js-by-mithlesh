import leftimg from '../images/sec-right.svg';
function Secondblock() {
    return (
        <div>
            <section className=" body-font">
                <div className="container mx-auto flex md:px-20 lg:px-20 px-6 sm:py-32 md:py-32 py-10 md:flex-row flex-col items-center w-full">
                        <img className="sm:w-9/12 md:w-9/12 w-full object-cover" alt="hero" src={leftimg} />
                    <div className="lg:flex-grow md:w-1/2 xl:w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-black ">
                        <h1 className="title-font  md:text-5xl lg:text-5xl 2xl:text-5xl text-3xl mb-4 font-bold ">An invite-only place with plenty of room to talk</h1>
                        <p className="mb-8 leading-relaxed  md:text-xl lg:text-xl text-xl">Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Secondblock;