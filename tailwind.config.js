/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/*.jsx'
  ],
  safelist: [
    {
      pattern: /^(animate\-lineMove)\d/
    }
  ],
  theme: {
    extend: {
      backgroundImage: {
        'terrain': "url('/images/terrain.png')",
      },
      animation:{
        'lineMove1Background': 'LineMove 10s linear infinite',
        'lineMove2Background': 'LineMove 10s 2.5s linear infinite',
        'lineMove3Background': 'LineMove 10s 5s linear infinite',
        'lineMove4Background': 'LineMove 10s 7.5s linear infinite',
        'lineMove1': 'LineMove 4s linear infinite',
        'lineMove2': 'LineMove 4s 1s linear infinite',
        'lineMove3': 'LineMove 4s 2s linear infinite',
        'lineMove4': 'LineMove 4s 3s linear infinite',
        'rightObstacleMove':'RightObstacleMove 2.5s linear 1',
        'leftObstacleMove':'LeftObstacleMove 2.5s linear 1'
      },
      keyframes:{
        LineMove:{
          '0%':{top: '0',transform: 'translate(-50%,-100%)'},
          '100%':{top: '100%',transform: 'translate(-50%,0%)'}
        },
        RightObstacleMove:{
          '0%':{top: '0',left: '12rem',transform: 'translate(0,-100%)'},
          '100%':{top: '100%',left: "12rem",transform: 'translate(0,0%)'}
        },
        LeftObstacleMove:{
          '0%':{top: '0',left: '2rem',transform: 'translate(0,-100%)'},
          '100%':{top: '100%',left: "2rem",transform: 'translate(0,0%)'}
        },
      },
    },
  },
  plugins: [],
}

