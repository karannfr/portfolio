import Aurora from './components/Aurora'
import ProfileCard from './components/ProfileCard';
import { TfiArrowTopRight } from "react-icons/tfi";

const Home = () => {
  return (
    <>
      <Aurora
        colorStops={["#3A29FF", "#66ffee", "#3A29FF"]}
        blend={0.5}
        amplitude={0.9}
        speed={0.5}
      />
      <div className='flex flex-col gap-8 py-16 px-8 lg:px-16'>
        <div className='flex md:flex-row flex-col md:justify-between items-start gap-16'>
          <div className='flex flex-col md:gap-8 gap-4 items-start'>
            <h1 className='font-bold text-xl sm:text-3xl md:text-3xl lg:text-5xl'>MERN Stack Developer | UI/UX Designer | VITV'26 | Chairperson@CodeChef-VIT</h1>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              I'm a final-year student at VIT Vellore, currently pursuing my undergraduate degree with a strong focus on technology and development. As a passionate and driven individual, I consistently strive to deepen my understanding of modern tools and frameworks, especially in the web development space. My journey so far has been shaped by a commitment to learning, building, and contributing meaningfully to every project I take on. Whether working individually or as part of a team, I bring focus, creativity, and a problem-solving mindset to the table.
            </p>
            <div className='flex flex-row gap-4'>
              <a href="" className='px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]'>Let's Talk</a>
              <a href="" target='_blank' className='px-4 sm:px-10 sm:text-xl py-4 bg-transparent border border-white text-white rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-500/15 hover:cursor-[url(/hover.svg),_pointer]'>View Resume</a>
            </div>
          </div>
          <ProfileCard
            name="Karan Dugar"
            title=''
            handle="karnx.dev"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/karan-min.png"
            iconUrl='/iconpattern.png'
            miniAvatarUrl='/memoji.png'
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => console.log('Contact clicked')}
            showBehindGradient={false}
            className='lg:ml-16 xl:ml-32'
          />
        </div>
        <div className='flex flex-col lg:flex-row gap-8 pt-8 lg:pt-16 lg:space-between'>
          <div className="text-xl sm:text-xl md:text-2xl font-semibold">Featured Work</div>
          <div className='flex flex-row flex-wrap gap-8 justify-end'>
            <div className='flex flex-col items-start gap-4 hover:cursor-[url(./QuiztelifyCursor.svg),_pointer] lg:w-80 xl:w-96 2xl:w-[625px]'>
              <img className="rounded-md"src="/Quiztelify.png" alt="" />
              <h1 className='text-xl sm:text-xl md:text-2xl font-semibold'>QuizTelify</h1>
              <p className='text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed'>Your Personalized NPTEL Quiz Companion</p>
              <a href="" className='group flex flex-row space-between items-center gap-4 px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]'>Vew Project <TfiArrowTopRight className='transition-transform duration-300 ease-in-out group-hover:rotate-45'/></a>
            </div>
            <div className='flex flex-col items-start gap-4 hover:cursor-[url(./QuiztelifyCursor.svg),_pointer] lg:w-80 xl:w-96 2xl:w-[625px]'>
              <img className="rounded-md"src="/Quiztelify.png" alt="" />
              <h1 className='text-xl sm:text-xl md:text-2xl font-semibold'>QuizTelify</h1>
              <p className='text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed'>Your Personalized NPTEL Quiz Companion</p>
              <a href="" className='group flex flex-row space-between items-center gap-4 px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]'>Vew Project <TfiArrowTopRight className='transition-transform duration-300 ease-in-out group-hover:rotate-45'/></a>
            </div>
            <div className='flex flex-col items-start gap-4 hover:cursor-[url(./QuiztelifyCursor.svg),_pointer] lg:w-80 xl:w-96 2xl:w-[625px]'>
              <img className="rounded-md"src="/Quiztelify.png" alt="" />
              <h1 className='text-xl sm:text-xl md:text-2xl font-semibold'>QuizTelify</h1>
              <p className='text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed'>Your Personalized NPTEL Quiz Companion</p>
              <a href="" className='group flex flex-row space-between items-center gap-4 px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]'>Vew Project <TfiArrowTopRight className='transition-transform duration-300 ease-in-out group-hover:rotate-45'/></a>
            </div>
            <div className='flex flex-col items-start gap-4 hover:cursor-[url(./QuiztelifyCursor.svg),_pointer] lg:w-80 xl:w-96 2xl:w-[625px]'>
              <img className="rounded-md"src="/Quiztelify.png" alt="" />
              <h1 className='text-xl sm:text-xl md:text-2xl font-semibold'>QuizTelify</h1>
              <p className='text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed'>Your Personalized NPTEL Quiz Companion</p>
              <a href="" className='group flex flex-row space-between items-center gap-4 px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]'>Vew Project <TfiArrowTopRight className='transition-transform duration-300 ease-in-out group-hover:rotate-45'/></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home