'use client'

import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formRegistry, formRegistryDefault } from '../types/yupSchema'
import { Input } from 'antd'
import ModalSuccess from './ModalSuccess'
import ModalFailure from './ModalFailure'
import request from '../utils/request'
import { API_PATH } from '../configs/constants'
import Loading from './Loading'

const FormRegistry = () => {
  const {
    formState: { errors, isDirty, isValid },
    control: controlCustomerRegistry,
    getValues,
    reset
  } = useForm({
    resolver: yupResolver(formRegistry()),
    mode: 'all',
    defaultValues: formRegistryDefault
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState<boolean | null>(false)
  const [resultSubmit, setResultSubmit] = useState(false)

  async function handleSubmit() {
    setIsLoading(true)
    setShowModal(null)
    request
      .post(API_PATH.CUSTOMER.REGISTRY, {
        name: getValues('companyName'),
        phoneNumber: getValues('phoneNumber'),
        email: getValues('email'),
        address: getValues('address')
      })
      .then((res) => {
        if (res && res?.metadata && res?.metadata?.statusCode === 201) {
          setResultSubmit(true)
          setShowModal(true)
          reset()
        } else {
          setResultSubmit(false)
          setShowModal(true)
        }
      })
      .catch(() => {
        setResultSubmit(false)
        setShowModal(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div
      className={
        'form-registry mx-[17px] my-[19px] px-[23px] md:px-[88.5px] py-[40px] rounded-[12px] gap-y-[20px] shadow-custom-shadow-form'
      }
    >
      <div className={'title-wrapper flex gap-y-[20px] flex-col mb-3'}>
        <div style={{ lineHeight: '36px' }} className='title text-[30px] font-[600] text-primary text-center'>
          Đăng ký thông tin
        </div>
        <div style={{ lineHeight: '27.88px' }} className={'sub-title text-center text-[18px] text-subText'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      </div>
      <Controller
        control={controlCustomerRegistry}
        name='companyName'
        render={({ field: { onChange, onBlur, value } }) => (
          <div className={'control h-[98px]'}>
            <label htmlFor={'companyName'} className={'label text-[14px] pb-[7px]'}>
              Tên công ty<span className={'text-red-700'}>*</span>
            </label>
            <div className={'relative flex '}>
              <Input
                id={'companyName'}
                className={'h-[62px] rounded-[12px] custom-input border-[2px]'}
                placeholder={'Tên công ty'}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              <span className={'absolute bottom-[-17px] text-red-700 text-[12px]'}>
                {errors.companyName?.message || ''}
              </span>
            </div>
          </div>
        )}
      />
      <Controller
        control={controlCustomerRegistry}
        name='phoneNumber'
        render={({ field: { onChange, onBlur, value } }) => (
          <div className={'control h-[98px]'}>
            <label htmlFor={'phoneNumber'} className={'label text-[14px] pb-[7px]'}>
              Số điện thoại<span className={'text-red-700'}>*</span>
            </label>
            <div className={'relative flex '}>
              <Input
                id={'phoneNumber'}
                className={'h-[62px] rounded-[12px] custom-input border-[2px]'}
                placeholder={'Số điện thoại'}
                onChange={onChange}
                onBlur={onBlur}
                value={value || ''}
              />
              <span className={'absolute bottom-[-17px] text-red-700 text-[12px]'}>
                {errors.phoneNumber?.message || ''}
              </span>
            </div>
          </div>
        )}
      />
      <Controller
        control={controlCustomerRegistry}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <div className={'control h-[98px]'}>
            <label htmlFor={'email'} className={'label text-[14px] pb-[7px]'}>
              Email<span className={'text-red-700'}>*</span>
            </label>
            <div className={'relative flex '}>
              <Input
                id={'email'}
                className={'h-[62px] rounded-[12px] custom-input border-[2px]'}
                placeholder={'Email của bạn'}
                onChange={onChange}
                onBlur={onBlur}
                value={value || ''}
              />
              <span className={'absolute bottom-[-17px] text-red-700 text-[12px]'}>{errors.email?.message || ''}</span>
            </div>
          </div>
        )}
      />
      <Controller
        control={controlCustomerRegistry}
        name='address'
        render={({ field: { onChange, onBlur, value } }) => (
          <div className={'control h-[98px]'}>
            <label htmlFor={'address'} className={'label text-[14px] pb-[7px]'}>
              Địa chỉ<span className={'text-red-700'}>*</span>
            </label>
            <div className={'relative flex '}>
              <Input
                id={'address'}
                className={'h-[62px] rounded-[12px] custom-input border-[2px]'}
                placeholder={'Địa chỉ của bạn'}
                onChange={onChange}
                onBlur={onBlur}
                value={value || ''}
              />
              <span className={'absolute bottom-[-17px] text-red-700 text-[12px]'}>
                {errors.address?.message || ''}
              </span>
            </div>
          </div>
        )}
      />
      {/*<Controller*/}
      {/*  control={controlCustomerRegistry}*/}
      {/*  name='roles'*/}
      {/*  render={() => (*/}
      {/*    <div className={'control h-[98px]'}>*/}
      {/*      <label className={'label text-[14px] pb-[7px]'}>*/}
      {/*        Chọn quyền*/}
      {/*        /!*<span*!/*/}
      {/*        /!*className={'text-red-700'}>*</span>*!/*/}
      {/*      </label>*/}
      {/*      <div className={'relative flex '}>*/}
      {/*        <Space className={'w-full min-w-full max-w-full'} wrap>*/}
      {/*          <Select*/}
      {/*            mode={'multiple'}*/}
      {/*            allowClear*/}
      {/*            className={'flex rounded-[12px] w-full min-w-full max-w-full'}*/}
      {/*            defaultValue='1'*/}
      {/*            style={{ height: '62px', width: '100%' }}*/}
      {/*            onChange={() => null}*/}
      {/*            showSearch={false}*/}
      {/*            options={[*/}
      {/*              { value: '1', label: 'Xem phong thủy' },*/}
      {/*              { value: '2', label: 'Xem tử vi' },*/}
      {/*              { value: '3', label: 'Đánh giá sản phẩm' }*/}
      {/*            ]}*/}
      {/*          />*/}
      {/*        </Space>*/}
      {/*        <span className={'absolute bottom-[-17px] text-red-700 text-[12px]'}>{errors.roles?.message || ''}</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*/>*/}
      <Controller
        control={controlCustomerRegistry}
        name='argreement'
        render={({ field: { onChange, value } }) => (
          <div className={'control h-[98px]'}>
            <div className={'flex relative'}>
              <div className={' mt-2 condition-term flex gap-x-1 justify-center items-start'}>
                <input
                  checked={value}
                  onChange={onChange}
                  className={'custom-checkbox'}
                  type={'checkbox'}
                  name='conditionTerm'
                  id='conditionTerm'
                />
                <label htmlFor='conditionTerm' className={'text-[14px] text-subText'}>
                  Tôi đã đọc, hiểu và đồng ý với các{' '}
                  <a href={'https://phuckhanggem.com/'} target={'_blank'} className={'text-primary'} rel='noreferrer'>
                    Điều khoản & Điều kiện của Phuc Khang Gems
                  </a>
                </label>
              </div>
              <span className={'absolute bottom-[-17px] left-[20px] text-red-700 text-[12px]'}>
                {errors.argreement?.message || ''}
              </span>
            </div>
          </div>
        )}
      />
      <button
        onClick={handleSubmit}
        disabled={!isDirty || !isValid}
        className={
          'disabled:bg-gray-500 btn h-[62px] font-bold w-full rounded-full text-[16px] mr-[14px] uppercase transition-all duration-200'
        }
      >
        Đăng ký
      </button>

      {showModal && (resultSubmit ? <ModalSuccess /> : <ModalFailure />)}
      <Loading loading={isLoading} />
    </div>
  )
}

export default FormRegistry
