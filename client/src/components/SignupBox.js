const SignupBox = () => {
  return (
    <div class="flex">
      <section class="xl:flex-1 sm:max-lg:hidden"></section>
      <section class="flex flex-1 flex-row items-center justify-center w-screen h-screen">
        <form action="/signup" method="POST"
          class="flex flex-col bg-white md:shadow-solid-primary md:border-2 md:border-black md:py-6 md:px-4 justify-center items-center mx-auto my-auto p-16">
          <div class="mb-3">
            <label for="userName" class="label">
              <span
                class="label-text text-lg font-semibold text-dark-slate-gray xs:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">User
                Name</span>
            </label>
            <input type="text"
              class="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="userName" name="userName" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="label">
              <span
                class="label-text text-lg font-semibold text-dark-slate-gray md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Email
                address</span>
            </label>
            <input type="email"
              class="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
            <div id="emailHelp" class="form-text text-dark-slate-gray">
              We will never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="password" class="label">
              <span
                class="label-text text-lg font-semibold text-dark-slate-gray md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Password</span>
            </label>
            <input type="password"
              class="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="password" name="password" />
          </div>
          <div class="mb-3">
            <label for="confirmPassword" class="label">
              <span
                class="label-text text-lg font-semibold text-dark-slate-gray md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Confirm
                Password</span>
            </label>
            <input type="password"
              class="bg-white input text-slate-600 input-bordered w-full shadow-solid-black rounded border-2 border-black"
              id="confirmPassword" name="confirmPassword" />
          </div>
          <button type="submit" class="btn btn-outline btn-success">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default SignupBox;
