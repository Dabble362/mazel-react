const PageNotFound404Box = () => {
  return (
    <div class="flex">
      <section class="flex flex-1 flex-row items-center justify-center w-screen h-screen">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="label">
            <span
              class="label-text text-dark-slate-gray text-lg font-semibold md:max-xl:backdrop-blur-sm md:max-xl:bg-white/30 flex flex-col bg-white md:shadow-solid-primary md:border-2 md:border-black md:py-6 md:px-4 justify-center items-center mx-auto my-auto p-16">
              <p>404 - Page Not Found</p>
              <br />
              <p>Your recipe is in another castle!</p>
            </span>
          </label>
        </div>
      </section>
    </div>
  )
}

export default PageNotFound404Box;
