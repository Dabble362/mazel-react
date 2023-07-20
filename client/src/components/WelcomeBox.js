const WelcomeBox = () => {
  return (
    <div className="flex">
      <section className="xl:flex-1 sm:max-lg:hidden"></section>
      <section className="flex flex-1 justify-center items-center h-screen">
        <div
          className="bg-white flex flex-col p-14 md:shadow-solid-primary md:border-2 md:border-black md:py-6 md:px-4 md:max-w-[500px]">
          <h1 className="mt-8 mb-2 text-8xl font-bold text-dark-slate-gray lg:backdrop-blur-xs">
            Mazel
          </h1>
          <figcaption className="mb-2 text-dark-slate-gray text-2xl font-semibold backdrop-blur-xs pb-8">
            A place to find, talk about, and save the recipes you love.
          </figcaption>
          <div>
            <a className="btn btn-outline btn-success mr-1" href="/login">
              Login</a>
            <a className="btn btn-outline btn-success" href="/signup">
              Signup</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WelcomeBox;