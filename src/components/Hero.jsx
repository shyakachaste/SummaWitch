import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/shyakachaste/SummaWitch", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Writings with <br className='max-md:hidden' />
        <span className='blue_gradient '>SUMMA WITCH</span>
      </h1>
      <h2 className='desc'>
      Make long articles short and easy! GPT-4 (  Summa Witch Ai ) Summarizer
      helps you understand with quick, simple summaries.
      </h2>
      </header>
  )
}

export default Hero