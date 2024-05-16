import React from 'react'
import LogoFooter from '../assets/images/footerMobile.png'
import GooglePlay from '../assets/images/googlePlay.png'
import AppleStore from '../assets/images/appleStore.png'
import { EmailSVG, FacebookSVG, MapSVG, PhoneSVG, TiktokSVG } from '../assets/svgs'
import StoreGoogleMap from '../components/StoreGoogleMap'
import { animateScroll as scroll, Link } from 'react-scroll'

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <footer className={'border-t-[3px] border-[#E0E0E0] pt-[43px] flex gap-y-[30px] flex-col'}>
      <div className={'md:px-[70px]'}>
        <div className='logo w-full justify-center items-center flex pb-[30px] md:pb-[50px]'>
          <img src={LogoFooter} alt='intro-2' style={{ objectFit: 'cover', width: '175px', height: '115px' }} />
        </div>
        <div className={'content-footer px-[16px]'}>
          <div className={'md:flex md:justify-between flex-wrap'}>
            <div className={'md:max-w-[408px]'}>
              <div style={{ lineHeight: '29.11px' }} className={'title text-primary font-[600] text-[22px]'}>
                Đăng ký tư vấn và theo dõi những sản phẩm mới của chúng tôi
              </div>
              <div
                className={
                  'relative border border-[#DEDFE0] rounded-full mt-[20px] overflow-hidden w-full pr-[16px] pl-[16px]'
                }
              >
                <input
                  type='text'
                  placeholder={'Địa chỉ email'}
                  className={
                    'w-[calc(100%-110px)]  custom-input-no-border input-email  placeholder-primary h-[56px] text-[14px]'
                  }
                />
                <button
                  className={'btn absolute top-[6px] right-[8px] h-[43px] w-[110.9px] px-[0] py-[0] rounded-full z-2'}
                >
                  <span className={'text-[14px]'}>Đăng ký ngay</span>
                </button>
              </div>
            </div>
            <div className={'store-wrapper  mt-[20px] md:mt-0 flex flex-col gap-y-[30px]'}>
              <div className={'title text-subText font-[500] text-[22px]'}>Ứng dụng Phuc Khang Gems</div>
              <div className={'flex gap-x-[20.82px]'}>
                <Link spy={true} smooth={true} delay={0} duration={1} to={'#home'} onClick={scrollToTop}>
                  <img
                    src={GooglePlay}
                    alt='intro-2'
                    style={{ objectFit: 'cover', width: '144.59px', height: '55.52px' }}
                  />
                </Link>
                <Link spy={true} smooth={true} delay={0} duration={1} to={'#home'} onClick={scrollToTop}>
                  <img
                    src={AppleStore}
                    alt='intro-2'
                    style={{ objectFit: 'cover', width: '144.59px', height: '55.52px' }}
                  />
                </Link>
              </div>
            </div>
            <div className={'contact-wrapper flex gap-y-[10px] flex-col pt-[20px]'}>
              <div className={'text-[#666666] text-[16px] font-[600]'}>
                Liên hệ: <span className={'font-[500]'}>0000-000-000</span>
              </div>
              <div className={'text-[#666666] text-[16px] font-[600]'}>
                Email: <span className={'font-[500]'}>@gmail.com</span>
              </div>
              <div className={'text-[#666666] text-[16px] font-[600]'}>
                Địa chỉ: <span className={'font-[500]'}>Location</span>
              </div>
            </div>
          </div>
          <div className={'line border-b-[2px] border-[#DEDFE0] my-[10px] md:my-[50px]'}></div>
          <div className={'context-with-us text-subText flex flex-col gap-y-[20px] md:flex-row md:justify-between'}>
            <div className={'flex flex-col gap-y-[10px]'}>
              <div style={{ lineHeight: '29.11px' }} className={'title font-[600] text-[22px]'}>
                Kết nối với chúng tôi
              </div>
              <div className={'sub-title font-[500] text-[16px]'}>Chia sẻ trải nghiệm của bạn ngay</div>
              <div className='icons-wrapper flex gap-[20px] flex-wrap max-w-[208px] justify-start md:max-w-full pt-[10px]'>
                <div className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                  <FacebookSVG color={'white'} />
                </div>
                <div className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                  <TiktokSVG color={'white'} />
                </div>
                <div className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                  <PhoneSVG color={'white'} />
                </div>
                <div className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                  <EmailSVG color={'white'} />
                </div>
                <div className={'svg-item w-[56px] h-[56px] bg-primary rounded-[8px] flex justify-center items-center'}>
                  <MapSVG color={'white'} />
                </div>
              </div>
            </div>
            <div className={'map w-[358px] h-[182px] rounded-[8px] overflow-hidden'}>
              <StoreGoogleMap />
            </div>
          </div>
        </div>
      </div>
      <div className={'bg-[#F4F4F4] h-[45px] flex justify-center items-center'}>
        <span className={'text-subText text-[14px] text-center'}>Copyright ©2024 belongs to Phuc Khang Gems</span>
      </div>
    </footer>
  )
}

export default Footer
