import { useState } from "react";

const LoginBox = ({ submitFunction }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitFunction({ email, password })
  }

  return (
    <div className="flex">
      <section className="flex flex-1 flex-row items-center justify-center w-screen h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col bg-white md:shadow-solid-primary md:border-2 md:border-black md:py-6 md:px-4 justify-center items-center mx-auto my-auto p-16"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="label">
              <span
                className="label-text text-dark-slate-gray text-lg font-semibold md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30">Email
                address</span>
            </label>
            <input
              type="email"
              className="bg-white input input-bordered w-full max-w-xs"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="label">
              <span className="label-text text-dark-slate-gray text-lg font-semibold">Password</span>
            </label>
            <input type="password"
              className="bg-white input input-bordered w-full max-w-xs"
              id="exampleInputPassword1"
              name="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-success lg:max-xl:bg-[#B5CFC8]"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default LoginBox;
