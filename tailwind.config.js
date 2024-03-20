/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        pup1: '#5700FF', //  shades of purple
        pup2: '#7833FF', 
        pup3: '#9A66FF',
        pup4: '#BC99FF',
        pup5:'#DECFFC',
        pup6:'#EEE5FF',
        pup7:'#F5F0FF',
        pup8:'#FCFAFF',
        // soft peach shades
        sfs1:'#E1DBD1',
        sfs2:'#EBE7E0',
        sfs3:'#EEEBE5',
        sfs4:'#F5F3F0',
        sfs5:'#F7F6F3',
        sfs6:'#F9F8F6',
        sfs7:'#FBFAF9',
        sfs8:'#FDFDFC',
        // grey shades
        gshades1:'#191919',
        gshades2:'#333333',
        gshades3:'#4C4C4C',
        gshades4:'#666666',
        gshades5:'#808080',
        gshades6:'#999999',
        gshades7:'#B3B3B3',
        gshades8:'#CCCCCC',
        // supporting color shades
        suppcol1:'#9E00FF',
        suppcol2:'#5EDC11',
        suppcol3:'#FFCE22',
        suppcol4:'#FF7222',
        suppcol5:'#FF22E9',
        suppcol6:'#2260FF',
        // Example custom secondary color
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ["Conthrax", 'Arial', 'sans-serif'], // Example custom font stack for sans-serif
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
}

