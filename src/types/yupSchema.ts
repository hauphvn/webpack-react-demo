import * as yup from 'yup'
import { email, phoneNumberFormat, stringRequired } from './yupValidation'

export const formRegistry = () => {
  return yup.object().shape({
    companyName: stringRequired,
    email,
    phoneNumber: phoneNumberFormat,
    address: stringRequired,
    // roles: arrayStringNormal,
    argreement: yup.boolean().oneOf([true], 'Bạn cần chấp nhận điều khoản và điều kiện')
  })
}
export const formRegistryDefault = {
  companyName: '',
  email: '',
  phoneNumber: '',
  address: '',
  // roles: [],
  argreement: false
}
