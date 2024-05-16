import './globals.css'
import React, { FC } from 'react'
import Bg1 from './assets/images/bg1.jpeg'
import Bg2 from './assets/images/bg2.jpeg'
import Bg3 from './assets/images/bg3.png'
import FormRegistry from './components/FormRegistry'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-scroll'

const App: FC = () => {
  return (
    <main className='max-w-[1440px] m-auto'>
      <Navbar />
      {/*Intro section*/}
      <div>
        <div className={'md:hidden px-[32px] py-[50px] flex flex-col gap-y-[30px] mt-[90px]'}>
          <div
            style={{ lineHeight: '26.63px', letterSpacing: '2px' }}
            className='intro text-primary text-[22px] font-[600] text-center'
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div id={'home'}></div>
          <div style={{ lineHeight: '16.94px', letterSpacing: '2px' }} className='sub-intro text-[14px] text-subText'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s, when an unknown
          </div>
          <div className='flex justify-center items-center'>
            <Link to={'registry'}>
              <button className={'btn rounded-full w-[176px] h-[44px]'}>Đăng ký ngay</button>
            </Link>
          </div>
        </div>
        <div className={'hidden lg:block'}>
          <div
            style={{ backgroundRepeat: 'no-repeat' }}
            className={
              'px-[32px] py-[50px] flex flex-row justify-between gap-x-[30px] mt-[90px] bg-custom-intro-bg bg-custom-intro-bg-size bg-custom-intro-bg-position'
            }
          >
            <div className={'left max-w-[640px] flex flex-col gap-y-[30px] pt-[56px]'}>
              <div
                style={{ lineHeight: '58.09px', letterSpacing: '2px' }}
                className='intro text-primary text-[22px] lg:text-[48px] font-[600]'
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
              <div
                style={{ lineHeight: '29.05px', letterSpacing: '2px' }}
                className='sub-intro text-[24px] text-subText'
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry standard dummy text ever since the 1500s, when an unknown
              </div>
              <Link to={'registry'}>
                <button className={'btn rounded-full w-[176px] h-[44px]'}>Đăng kí ngay</button>
              </Link>
            </div>
            <div className={'right flex items-center max-w-[600px] gap-x-[26px]'}>
              <div
                style={{ boxShadow: '7px 8px 30px 0px #00000040' }}
                className={
                  'border-[#FFF8ED] h-[411px] relative w-[318px] border-[7px] rounded-custom-rounded-image-1 overflow-hidden'
                }
              >
                <img
                  src={Bg1}
                  alt='intro-1'
                  style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }}
                />
              </div>
              <div className={''}>
                <div
                  className={
                    'h-[278px] relative w-[256] border-[#FFF8ED] border-[7px] rounded-custom-rounded-image-1 overflow-hidden'
                  }
                >
                  <img
                    src={Bg2}
                    alt='intro-2'
                    style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }}
                  />
                </div>
                <div
                  className={
                    'h-[278px] relative w-[256px] border-[#FFF8ED] border-[7px] rounded-custom-rounded-image-2 overflow-hidden'
                  }
                >
                  <img
                    src={Bg3}
                    alt='intro-2'
                    style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Intro section*/}
      <div className={'md:flex md:flex-row flex-wrap flex-auto justify-center items-center gap-x-[20px] md:pb-[50px]'}>
        {/*Form registry*/}
        <div id={'registry'} className={'flex-1 md:p-[20px]'}>
          <FormRegistry />
        </div>
        {/*End Form registry*/}
        {/*Contact*/}
        <div className={'flex-1 md:max-w-[563px]'}>
          <Contact />
        </div>
        {/*End Contact*/}
      </div>

      {/*Footer*/}
      <Footer />
      {/*End Footer*/}
    </main>
  )
}

export default App
