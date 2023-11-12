import DateCounter from "./Components/DateCounter/DateCounter"
import Steps from "./Components/Steps/Steps"

function App() {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Steps/>
        <DateCounter/>
      </div>
      <h3 className="attribution sticky bottom-0 w-full text-center text-base bg-[#2dc5f4] mt-10">
          Coded by &copy; <span className='text-lg font-medium'>Mahmoud Magdy</span> | <a href="https://github.com/ememVII" target='_blank'>👉🏻 Github</a>
      </h3>
    </>
  )
}

export default App
