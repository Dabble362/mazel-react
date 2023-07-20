const SignupBox = () => {
  return (
    <div className="flex">
      <section className="xl:flex-1 sm:max-lg:hidden"></section>
      <section className="flex flex-1 flex-row items-center justify-center w-screen h-screen">
        <form action="/signup" method="POST"
          className="flex flex-col bg-white md:shadow-solid-primary md:border-2 md:border-black md:py-6 md:px-4 justify-center items-center mx-auto my-auto p-16">
          <div className="mb-3">
            <label htmlFor="userName" className="label">
              <span
                className="label-text text-lg font-semibold text-dark-slate-gray xs:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">User
                Name</span>
            </label>
            <input type="text"
              className="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="userName" name="userName" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="label">
              <span
                className="label-text text-lg font-semibold text-dark-slate-gray md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Email
                address</span>
            </label>
            <input type="email"
              className="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
            <div id="emailHelp" className="form-text text-dark-slate-gray">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="label">
              <span
                className="label-text text-lg font-semibold text-dark-slate-gray md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Password</span>
            </label>
            <input type="password"
              className="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="password" name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="label">
              <span
                className="label-text text-lg font-semibold text-dark-slate-gray md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Confirm
                Password</span>
            </label>
            <input type="password"
              className="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="confirmPassword" name="confirmPassword" />
          </div>
          <button type="submit" className="btn btn-outline btn-success">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default SignupBox;
