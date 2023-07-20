const FeedPage = ({ recipes }) => {
  return (
    <div className="flex flex-row justify-between">
      <div
        className="flex flex-col md:px-16 md:pb-16 sm:w-11/12 lg:w-4/6 bg-white/50 mx-auto px-2 shadow-xl shadow-max-yel-green-500/50">
        <div className="flex">
          <h2
            className="my-4 pb-2 text-4xl w-full font-bold text-dark-slate-gray bg-gradient-to-r from-base-100 border-b-4 border-forest-green">
            My Recipes
          </h2>
        </div>

        {!recipes?.length > 0
          ?
          <div>
            {`We know the best recipes come from the heart, and we can't wait to see
            what you've got cooking! Start by adding your favorite recipe and let's
            create some culinary magic together!`}
          </div>
          :
          <div
            className="flex flex-wrap justify-start"
          >
            {recipes.map((recipe, index) => (
              <div
                className="flex flex-col justify-center items-center bg-white rounded py-2 md:px-12 my-4 md:my-2 sm:w-11/12 lg:w-1/3 px-2 border-2 border-black shadow-solid-black"
                key={index}
              >
                <div className="flex flex-row justify-center w-full">
                  <h3 className="text-2xl font-bold text-dark-slate-gray">
                    {recipe.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        }

        <div
          className="flex flex-row justify-around bg-white rounded py-2 md:px-12 my-4 md:my-2 sm:w-11/12 lg:w-4/6 mx-auto px-2 border-2 border-black shadow-solid-black">
          <a href="/profile?skip=<%=skip-6 %> " className="rounded-full border-black border-2 lg:max-xl:bg-[#b57bff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 stroke-[#073D00]"
              stroke="currentColor" fill="forest-green">
              <path
                d="M14 17a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293A1 1 0 0 1 14 17z"
              // style="fill: #ff8e31" TODO: ask about this orange color
              />
            </svg>
          </a>
          <a href="/profile?skip=<%=skip+6 > userRecipeCount ? skip : skip+6 %>"
            className="rounded-full border-black border-2 lg:max-xl:bg-[#b57bff]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 w-12 stroke-[#073D00]"
              stroke="currentColor" fill="forest-green">
              <path
                d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z"
              // style="fill: #ff8e31"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeedPage;
