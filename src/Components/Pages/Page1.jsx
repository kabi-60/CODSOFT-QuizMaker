import {React,useEffect } from 'react';
import NavBar from '../Navbar/NavBar';
import think from '../panda/think.png';
import { useNavigate} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page1 = () => {
  const navigate = useNavigate()

  const nextpage=()=>{

    navigate('/page2')
  }

  const loginpage=()=>{

    navigate('/login')
  }
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  
  return (
    <section className='container bg-[#39383a] h-[100vh] lg:bg-white  mx-auto overflow-hidden'>
      <div className='hidden lg:block mx-32 mt-10'>
        <NavBar />
        <div className=''>
          <div className='flex w-full my-20'>
            <div className='w-[60%]'>
              <img src={think} className='h-[600px]' data-aos="zoom-in" alt="" />
            </div>
            <div className='flex mt-10 items-center'>
              <div className='h-96 w-[550px]'>
                <h1 className='text-5xl text-[#39383a] text-center font-bold '>
                  The free, fun, and effective way to learn General Knowledge!
                </h1>
                <div className='mt-10 w-[380px] mx-auto'>
                  <button onClick={nextpage} className='bg-[#fbbb01] hover:bg-[#fbc835] px-3 py-2 rounded text-[#fffefe] font-semibold w-full my-2'>
                    Get Started
                  </button>
                  <button  onClick={loginpage} className='bg-[#fffefe] hover:bg-[#efefed] border px-3 py-2 rounded text-[#39383a] font-semibold w-full my-2 shadow-md'>
  I Already Have an Account
</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:hidden  flex items-center justify-center h-[98vh]'>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col items-center justify-center flex-grow'>
          <div className='flex justify-center'>
            <img src={think} alt="Thinking Panda" data-aos="zoom-in" className='h-[300px]' />
          </div>
          <div className='flex justify-center'>
            <h1 className='text-[#fbbb01] text-2xl font-mono font-bold'>KABI VIRUZ</h1>
          </div>
          <div className='flex justify-center'>
            <h1 className='text-md text-[#afafaf] mt-5 text-center font-bold'>
              The free, fun, and effective way to learn General Knowledge!
            </h1>
          </div>
        </div>
        <div className='w-[380px] mx-auto '>
          <button
            onClick={nextpage}
            className='bg-[#fbbb01] hover:bg-[#fbc835] px-3 py-3 rounded text-[#fffefe] font-semibold w-full my-3'
          >
            Get Started
          </button>
          <button onClick={loginpage} className='bg-[#fffefe] hover:bg-[#efefed] border px-3 py-3 rounded text-[#39383a] font-semibold w-full  shadow-md'>
            I Already Have an Account
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Page1;
  


