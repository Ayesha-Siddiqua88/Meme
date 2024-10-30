import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className='min-h-screen gradient-bg overflow-hidden scroll-smooth'>
      <div className='max-w-7xl mx-auto p-5'>
        <Header/>
      </div>
      <div className='max-w-7xl mx-auto p-5'>
        <Meme/>
      </div>

      <style jsx>{`
              body {
          margin: 0;
          padding: 0;
        }
        .gradient-bg {
          background: linear-gradient(90deg, #D4145A, #FBB03B);
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
            `}</style>
    </div>
  );
}

export default App;
