import ProfileCard from './components/ProfileCard';
import { TfiArrowTopRight } from "react-icons/tfi";
import * as motion from "motion/react-client"

const Home = () => {
  const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
    });
  };
  const devLabProjects = [
    {
      name: 'GenCode',
      description: 'A MERN stack platform where users can generate AI-based competitive programming problems with adjustable difficulty. It includes a code editor, question history with solved/unsolved tracking, and user performance stats.',
      image: '/gencode.png',
      href: 'https://gencode.karnx.dev',
      cursor: '/gencode_cursor.svg',
    },
    {
      name: 'Quiztelify',
      description: 'A web app for practicing NPTEL course quizzes. Users can select from pre-uploaded courses or upload a PDF to auto-generate question sets. The platform uses Gemini 2.0 and 2.5 APIs for parsing and supports performance tracking.',
      image: '/Quiztelify.png',
      href: 'https://quiztelify.karnx.dev',
      cursor: '/QuiztelifyCursor.svg',
    },
    {
      name: 'FFCS-Inator',
      description: 'A tool built for VIT students to generate optimal FFCS timetables. It minimizes slot clashes and allows prioritizing courses based on user preferences. Used during course registration to speed up timetable planning.',
      image: '/FFCS.png',
      href: 'https://ffcs.codechefvit.com',
      cursor: '/logo_ffcs.svg',
    },
    {
      name: 'Papers',
      description: 'A central repository of past CAT and FAT exams curated by CodeChef-VIT. Offers easy access to categorized question papers to help students prepare and revise effectively before exams.',
      image: '/papers.png',
      href: 'https://papers.codechefvit.com',
      cursor: '/codechef.svg',
    },
    {
      name: 'ForReal',
      description: 'A deep learning-based project that detects AI-generated (DeepFake) media. Built with a CNN model trained on over 40,000 images and 80,000 audio samples. Achieved over 93% accuracy and secured 2nd place at Code4Change VIT.',
      image: '/forreal.png',
      href: 'https://forreal-deploy-build.vercel.app',
      cursor: '/codechef.svg',
    },
  ];
  return (
    <>
      <div className='flex flex-col gap-8 py-16 px-8 lg:px-16'>
        <div className='flex md:flex-row flex-col md:justify-between items-start gap-16 md:py-36'>
          <div className='flex flex-col md:gap-8 gap-4 items-start'>
            <h1 className='font-bold text-xl sm:text-3xl md:text-3xl lg:text-5xl'>MERN Stack Developer | UI/UX Designer | VITV'26 | Chairperson@CodeChef-VIT</h1>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              I'm a final-year student at VIT Vellore, currently pursuing my undergraduate degree with a strong focus on technology and development. As a passionate and driven individual, I consistently strive to deepen my understanding of modern tools and frameworks, especially in the web development space. My journey so far has been shaped by a commitment to learning, building, and contributing meaningfully to every project I take on. Whether working individually or as part of a team, I bring focus, creativity, and a problem-solving mindset to the table.
            </p>
            <div className='flex flex-row gap-4'>
              <button className='px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]' onClick={scrollToBottom}>Let's Talk</button>
              <a href="./resume.pdf" target='_blank' className='px-4 sm:px-10 sm:text-xl py-4 bg-transparent border border-white text-white rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-500/15 hover:cursor-[url(/hover.svg),_pointer]'>View Resume</a>
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
        <div className="pt-8 lg:pt-16 text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {[
              { name: 'AI', src: './stack/ai.svg' },
              { name: 'AWS', src: './stack/aws.svg' },
              { name: 'C++', src: './stack/c++.svg' },
              { name: 'Cloudflare', src: './stack/cloudflare.svg' },
              { name: 'Express.js', src: './stack/expressjs.svg' },
              { name: 'Framer Motion', src: './stack/framer.svg' },
              { name: 'Java', src: './stack/java.svg' },
              { name: 'JavaScript', src: './stack/js.svg' },
              { name: 'MongoDB', src: './stack/mongodb.svg' },
              { name: 'Mongoose', src: './stack/mongoose.svg' },
              { name: 'Next.js', src: './stack/nextjs.svg' },
              { name: 'Node.js', src: './stack/nodejs.svg' },
              { name: 'npm', src: './stack/npm2.svg' },
              { name: 'Python', src: './stack/python.svg' },
              { name: 'React', src: './stack/react.svg' },
              { name: 'React Query', src: './stack/reactquery.svg' },
              { name: 'Tailwind CSS', src: './stack/tailwindcss.svg' },
              { name: 'TypeScript', src: './stack/typescript.svg' },
              { name: 'Vercel', src: './stack/vercel.svg' },
              { name: 'Vite.js', src: './stack/vitejs.svg' }
            ].map((tech, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.0,
                    delay: 0.0,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                key={index}
                className="group bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-purple-500 p-6 rounded-xl flex flex-col items-center justify-center transition-transform hover:scale-105 shadow-md shadow-zinc-800/30"
              >
                <img src={tech.src} alt={tech.name} className="h-10 sm:h-12 mb-2" />
                <div className="text-base md:text-lg font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='pt-20'>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-white">Dev Lab</h2>
          <div className='flex flex-wrap gap-8 justify-start'>
            {devLabProjects.map((project, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-start gap-4 lg:w-80 xl:w-96 2xl:w-[625px]`}
                style={{ cursor: `url(${project.cursor}) 12 12, pointer` }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.0,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img className="rounded-md" src={project.image} alt={project.name} />
                <h1 className="text-xl sm:text-xl md:text-2xl font-semibold">{project.name}</h1>
                <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">{project.description}</p>
                <a
                  href={project.href}
                  target="_blank"
                  className="group flex flex-row space-between items-center gap-4 px-7 sm:px-12 sm:text-xl py-4 bg-white text-black rounded-md text-sm font-semibold  transition delay-150 duration-300 ease-in-out hover:bg-purple-400 hover:cursor-[url(/hover.svg),_pointer]"
                >
                  View Project <TfiArrowTopRight className="transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home