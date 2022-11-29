const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const theme = require("tailwindcss/defaultTheme");


module.exports = {
  content: ["./index.html","./src/javascript/*.vue","./src/javascript/**/*.vue"],
  theme: {
    screens: {
      'sm': '500px',
      'md':  '768px',
      'lg': '968px',
      'xlg':  '1200px'
    },
    spacing: {
      '0':'0',
      '0.125':'0.125rem',
      '0.25':'0.25rem',
      '0.375':'0.375rem',
      '0.5':'0.5rem',
      '0.65':'0.65rem',
      '0.75':'0.75rem',
      '0.85':'0.85rem',
      '1':'1rem',
      '1.1':'1.1rem',
      '1.2':'1.2rem',
      '1.3':'1.3rem',
      '1.4':'1.4rem',
      '1.5':'1.5rem',
      '1.6':'1.6rem',
      '1.7':'1.7rem',
      '1.8':'1.8rem',
      '1.9':'1.9rem',
      '2':'2rem',
      '2.25':'2.25rem',
      '2.5':'2.5rem',
      '2.75':'2.5rem',
      '3':'3rem',
      '3.25':'3.25rem',
      '3.5':'3.5rem',
      '3.75':'3.75rem',
      '4':'4rem',
      '4.25':'4.25rem',
      '4.5':'4.5rem',
      '4.75':'4.75rem',
      '5':'5rem',
      '5.25':'5.25rem',
      '5.5':'5.5rem',
      '5.75':'5.75rem',
      '6':'6rem',
      '7':'7rem',
      '8':'8rem',
      '9':'9rem',
      '10':'10rem',
      '11':'11rem',
      '12':'12rem',
      '13':'13rem',
      '14':'14rem',
      '15':'15rem',
      '16':'16rem',
      '17':'17rem',
      '18':'18rem',
      '19':'19rem',
      '20':'20rem',
      '21':'21rem',
      '22':'22rem',
      '23':'23rem',
      '24':'24rem',
    },
    fontSize:{
      '0.125':'0.125rem',
      '0.25':'0.25rem',
      '0.375':'0.375rem',
      '0.5':'0.5rem',
      '0.625':'0.625rem',
      '0.75':'0.75rem',
      '0.875':'0.875rem',
      '1':'1rem',
      '1.1':'1.1rem',
      '1.2':'1.2rem',
      '1.3':'1.3rem',
      '1.4':'1.4rem',
      '1.5':'1.5rem',
      '1.6':'1.6rem',
      '1.7':'1.7rem',
      '1.8':'1.8rem',
      '1.9':'1.9rem',
      '2':'2rem',
      '2.25':'2.25rem',
      '2.5':'2.5rem',
      '2.75':'2.5rem',
      '3':'3rem',
      '3.25':'3.25rem',
      '3.5':'3.5rem',
      '3.75':'3.75rem',
      '4':'4rem',
      '4.25':'4.25rem',
      '4.5':'4.5rem',
      '4.75':'4.75rem',
      '5':'5rem',
      '5.25':'5.25rem',
      '5.5':'5.5rem',
      '5.75':'5.75rem',
      '6':'6rem',
      '7':'7rem',
      '8':'8rem',
      '9':'9rem',
      '10':'10rem',
      '11':'11rem',
      '12':'12rem',
      '13':'13rem',
      '14':'14rem',
      '15':'15rem',
      '16':'16rem',
      '17':'17rem',
      '18':'18rem',
      '19':'19rem',
      '20':'20rem',
      '21':'21rem',
      '22':'22rem',
      '23':'23rem',
      '24':'24rem',
    },
    fontWeight:{
      '100':'100',
      '200':'200',
      '300':'300',
      '400':'400',
      '500':'500',
      '600':'600',
      '700':'700',
      '800':'800',
      '900':'900'
    },
    lineHeight:{
      '1':'1',
      '1.1':'1.1',
      '1.2':'1.2',
      '1.3':'1.3',
      '1.4':'1.4',
      '1.5':'1.5',
      '1.6':'1.6',
      '1.7':'1.7',
      '1.8':'1.8',
      '1.9':'1.9',
      '2':'2',
      '3':'3',
      '4':'4',
    },
    borderRadius:{
      '2':'2px',
      '4':'4px',
      '6':'6px',
      '8':'8px',
      '10':'10px',
      '12':'12px',
      '14':'14px',
      '16':'16px',
      '18':'18px',
      '20':'20px',
      '24':'24px',
      '26':'26px',
      '28':'28px',
      'full':'9999px'
    },
    fontFamily:{
      main:['Montserrat','sans-serif']
    },
    container:{
      center:true
    },

    extend:{
        colors:{
          primary:{
            indigo:colors.indigo["600"],
            red:colors.red["500"],
            sky:colors.sky["500"],
            green:colors.green["500"],
            gray:'#6c757d'
          },
          secondary:{
            indigo:colors.indigo["500"],
            indigoLight:colors.indigo["300"],
            red:colors.red["300"],
            sky:colors.sky["300"],
            green:colors.green["300"],
            gray:'#adb5bd'


          }
        }
    }
  },
  plugins: [
      plugin(function ({addBase}) {
        addBase({
          '*':{
            fontFamily:'theme(fontFamily.main)'
          },
          'body':{
            overflowX:'hidden'
          },
          'h1,h2,h3,h4,h5,h6':{
            lineHeight:'1.6'
          }
        })
      })
  ],
}