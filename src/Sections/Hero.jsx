const words = [
    {text: 'Ideas', imgpath: '/images/ideas.svg'},
    {text: 'Concepts', imgpath: '/images/concepts.svg' }
];

const Hero = () => {
  return (
 <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/image/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        {/*LEFT: Hero Content*/}
        <header className="flex flex-col justify-center md:w-full w-screen
        md:px-20 px-5">
            <div className="flex flex-col gap-7">
               <div className="hero-text">
                <h1>Shaping Designs</h1>
                <h1>into Real Projects</h1>
                <h1>that Delivers Result</h1>
               </div>
            </div>
        </header>


        {/*RIGHT: 3D Model*/}

      </div>
  </section>  
  )
}

export default Hero