import React from 'react'
import Logo from '../assets/images/logo.png'
import { QuestionSVG } from '../assets/svgs'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav
      className={
        'flex justify-between items-center fixed top-0 bg-[white] h-[88px] z-10 w-full py-[16px] px-[20px] border shadow' +
        ' xl:max-w-[1440px] xl:px-[50px] xl:shadow-lg'
      }
    >
      <Link to={'home'}>
        <img src={Logo} alt='phuc-khang-gems-logo' width='100' height='100' />
      </Link>
      <div className={'flex justify-center items-center gap-x-3'}>
        <div className={'hidden xl:flex gap-x-1'}>
          <QuestionSVG /> <span className={'text-subText'}>Help</span>
        </div>
        <a href='tel:+84938178938' className={'ringing-phone'}>
          <button className={'btn rounded-full text-[16px] mr-[14px]'}>Liên hệ ngay</button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
