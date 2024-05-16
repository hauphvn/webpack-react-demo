import React from 'react'
import { EmailSVG, FacebookSVG, MapSVG, PhoneSVG, TiktokSVG } from '../assets/svgs'
import AppStore from '../assets/images/appleStore.png'
import PlayStore from '../assets/images/googlePlay.png'
import { Link } from 'react-scroll'

const Contact = () => {
  return (
    <div className={'mx-[16px] mb-[50px]'}>
      <div className={'title text-primary text-center md:text-left text-[30px] font-[600]'}>
        Lorem Ipss simply dummy text of the
      </div>
      <div style={{ lineHeight: '26px' }} className={'sub-title text-subText font-[500] text-[18px] mb-[30px]'}>
        Lorem Ips simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard
        dummy text ever since the 1500s, when an unknown
      </div>
      <div className={'context-wrapper flex justify-center md:items-start flex-col items-center gap-y-[20px]'}>
        <div className={'us text-primary text-center md:text-left text-[22px] font-[600]'}>Liên hệ với chúng tôi!</div>
        <div className='icons-wrapper flex gap-[20px] flex-wrap max-w-[208px] justify-center md:max-w-full'>
          <div
            className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}
          >
            <FacebookSVG />
          </div>
          <div
            className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}
          >
            <TiktokSVG />
          </div>
          <div
            className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}
          >
            <PhoneSVG />
          </div>
          <div
            className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}
          >
            <EmailSVG />
          </div>
          <div
            className={'svg-item w-[56px] h-[56px] bg-primaryOpacity50 rounded-[8px] flex justify-center items-center'}
          >
            <MapSVG />
          </div>
        </div>
        <div className='download-apps gap-y-[30px] flex flex-col'>
          <div className={'font-[600] text-[22px] text-primary text-center md:text-left'}>Tải app Phuc Khang ngay</div>
          <div className={'flex gap-x-[21px]'}>
            <Link to={'home'}>
              <img src={PlayStore} alt='intro-2' style={{ objectFit: 'cover', width: '145.83px', height: '56px' }} />
            </Link>
            <Link to={'home'}>
              <img src={AppStore} alt='intro-2' style={{ objectFit: 'cover', width: '145.83px', height: '56px' }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
