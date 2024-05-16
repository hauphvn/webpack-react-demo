export const ENV = {
  DEV: 'development',
  PRO: 'production'
}
export const NAV_PATH = {
  HOME: '/',
  SIGN_IN: '/signIn',
  SIGN_UP: '/signUp',
  FORGET_PASSWORD: '/forgetPassword',
  DASHBOARD: '/admin/dashboard',
  USER: {
    DASHBOARD: '/user/dashboard',
    SALARY: '/user/dashboard/salary',
    TIME_CHECKING: '/user/dashboard/timeChecking',
    CHECK_WAREHOUSE: '/user/dashboard/checkWarehouse'
  },
  ADMIN: {
    DASHBOARD: '/admin/dashboard',
    MANAGEMENT_STAFF: '/admin/dashboard/management/staff',
    SETTING_SALARY: '/admin/dashboard/management/salary/setting',
    CHECK_IN_OUT: '/admin/dashboard/management/salary/checkInOut',
    CHECK_IN_OUT_APP: '/admin/dashboard/management/salary/checkInOutApp',
    CALC_SALARY: '/admin/dashboard/management/salary/calc',
    PRODUCT_WAREHOUSE: '/admin/dashboard/management/warehouse/product',
    GAME_WHEEL: '/admin/dashboard/management/eventSystem/wheel',
    GIFT_FOR_BILL_TOTAL: '/admin/dashboard/management/eventSystem/gift-for-bill-total',
    DISCOUNT_FOR_BILL_TOTAL: '/admin/dashboard/management/eventSystem/discount-for-bill-total',
    INCREASE_FOR_BILL_TOTAL: '/admin/dashboard/management/eventSystem/increase-for-bill-total',
    SYSTEM: '/admin/dashboard/management/system/common-install'
  },
  CODE_TO_START_GAME: {
    INDEX: '/code-to-start-game',
    ADD: '/code-to-start-game/add',
    VALIDATE: '/code-to-start-game/check'
  },
  CODE_TO_WIN_GAME: {
    INDEX: '/code-to-win-game',
    ADD: '/code-to-win-game/add',
    VALIDATE: '/code-to-win-game/check'
  },
  CUSTOMER_POS: {
    INDEX: '/customer',
    GET_ONE: '/customer/member-for-pos',
    ADD_ONE: '/customer/add-from-web-pos'
  },
  TOKEN_ACCESS_CUSTOMER_POS: {
    INDEX: '/token-access-registry-from-pos',
    GET_ONE: '/token-access-registry-from-pos/get',
    ADD_ONE: '/token-access-registry-from-pos/add',
    DEL_ONE: '/token-access-registry-from-pos/delete'
  }
}
export const API_PATH = {
  // API_LINK: 'http://192.168.1.3:4200/v1/api',
  API_LINK: 'https://api.kaykafe.com/v1/api',
  CUSTOMER: {
    REGISTRY: '/customers/add'
  }
}

export const DATE_FORMAT_INTERNATIONAL = 'YYYY-MM-DD'
export const FORMAT_TIME_MINUS = 'HH:mm'
export const FORMAT_TIME = 'HH:mm:ss'
export const FORMAT_DATE = 'DD-MM-YYYY'
export const FORMAT_DATE_TIME = 'DD-MM-YYYY HH:MM'
export const FORMAT_DATE_TIME_FROM_BE = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
export const FORMAT_DATE_FROM_BE = 'YYYY-MM-DD'
export const FORMAT_MONTH_FROM_BE = 'YYYY-MM'
export const FORMAT_DATE_BE = 'YYYY-MM-DD'
export const FORMAT_MONTH = 'MM-YYYY'
export const FORMAT_MONTH_BE = 'YYYY-MM'
export const FORMAT_DAY_MONTH = 'DD-MM'

export const REGEX_PASSWORD_STRONG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,32}$/
export const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,6}$/
export const REGEX_PHONE_NUMBER_JP = /^0\d{2}\s?\d{6}$/
export const REGEX_PHONE_NUMBER_SIMPLE = /^0\d{9}$/
export const LOCALSTORAGE_ITEM = {
  ACCESS_TOKEN: 'tka',
  ROLE: 'conRy',
  ROLE_STAFF: 'conRySt',
  REFRESH_TOKEN: 'tkr',
  TOKEN_EXPIRED: 'tke',
  IS_FIRST: 'is_first',
  INFO_COLOR: 'color',
  USER_ID: 'tkeri',
  ADDRESS_STORE: 'sts'
}

export const ERROR_CODE_RESPONSE = [
  {
    err_code: '001',
    msg: 'Email hoặc mật khẩu không đúng!'
  },
  {
    err_code: '002',
    msg: 'Email hoặc mật khẩu không đúng!'
  },
  {
    err_code: '003',
    msg: 'Email đã tồn tại. Vui lòng chọn một email khác!'
  },
  {
    err_code: '004',
    msg: 'Email không tồn tại!'
  },
  {
    err_code: '006',
    msg: 'Mã chấm công đã tồn tại. Vui lòng chọn mã khác!'
  },
  {
    err_code: '007',
    msg: 'Cập nhật thất bại. Không thể lấy thông tin nhân viên!'
  },
  {
    err_code: '008',
    msg: 'Mật khẩu cũ không chính xác!'
  },
  {
    err_code: '009',
    msg: 'Đã tồn tại một tên tương tự!'
  },
  {
    err_code: '010',
    msg: 'Bạn không có quyền truy cập!'
  },
  {
    err_code: '011',
    msg: 'Lỗi gửi thắc mắc thất bại. Vui lòng liên hệ quản lí!'
  },
  {
    err_code: '012',
    msg: 'Sai mật khẩu! Vui lòng nhập lại.'
  },
  {
    err_code: '013',
    msg: 'Bạn chưa được cấp quyền, Vui lòng liên hệ quản lí.'
  },
  {
    err_code: '014',
    msg: 'Ngày đã tồn tại trong hệ thống!'
  },
  {
    err_code: '014',
    msg: 'Ngày đã tồn tại trong hệ thống!'
  },
  {
    err_code: '015',
    msg: 'Địa chỉ đã tồn tại trong hệ thống!!'
  },
  {
    err_code: '017',
    msg: 'Email đã tồn tại trong hệ thống!!'
  }
]

export const FILE_EXTEND_UPLOAD = {
  PDF: 'application/pdf',
  CSV: 'text/csv',
  WORD_NEW: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  WORD_OLD: 'application/msword',
  JPG_JPEG: 'image/jpeg',
  PNG: 'image/png',
  GIF: 'image/gif',
  TIFF: 'image/tiff',
  TXT: 'text/plain',
  PPT: 'application/vnd.ms-powerpoint',
  PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  EXCEL_NEW: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  EXCEL_OLD: 'application/vnd.ms-excel'
}

export const LIMIT_STRING_INPUT = {
  SMALL: 50,
  BIG: 500
}

export const STATUS_STAFF_WORKING = {
  PENDING: {
    KEY: 'pending',
    value: 'Chưa đổi mật khẩu'
  },
  LOCKED: {
    KEY: 'locked',
    value: 'Khoá tài khoản'
  },
  ACTIVE: {
    KEY: 'active',
    value: 'Đang hoạt động'
  }
}
export const STATUS_STAFF_WORKING_OPTIONS = [
  {
    label: STATUS_STAFF_WORKING.PENDING.value,
    value: STATUS_STAFF_WORKING.PENDING.KEY
  },
  {
    label: STATUS_STAFF_WORKING.LOCKED.value,
    value: STATUS_STAFF_WORKING.LOCKED.KEY
  },
  {
    label: STATUS_STAFF_WORKING.ACTIVE.value,
    value: STATUS_STAFF_WORKING.ACTIVE.KEY
  }
]

export const PAGINATION = {
  PAGE_SIZE: 8
}
