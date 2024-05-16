module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {

    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      maxWidth:{
        'custom-max-width-modal-mobile': '310px!important',
        'custom-max-width-modal-desktop': '510px!important'
      },
      backgroundImage: {
        'custom-intro-bg': "url('../src/assets/images/bg-combine.png')",
        'custom-modal-bg': "url('./assets/images/pg-modal.png')",
      },
      backgroundPosition: {
        'custom-intro-bg-position': 'bottom right',
      },
      backgroundSize: {
        'custom-intro-bg-size': '60% auto',
        'custom-modal-bg-size': 'contain',
      },
      backgroundRepeat: {
        'custom-intro-bg-repeat': 'no-repeat',
      },
      borderRadius: {
        'custom-rounded-image-1': '90px 0px 90px 0px',
        'custom-rounded-image-2': '0px 90px 0px 90px',
      },
      boxShadow:{
        'custom-shadow-form': '0px 4px 84px 0px #0000001A',
      },
      colors: {
        primary: "#F6821F",
        primaryOpacity50: "#FFF8ED",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        subText: "#666666",
        accent: "#FF5733",
        hover: "#FFC300",
        body: "#ffffff",
      },
    },
  },
  plugins: [],
};
