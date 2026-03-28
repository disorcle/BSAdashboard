import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { greasemonkey } from 'globals'
import bsa from './api/bsa'
import ReactECharts from 'echarts-for-react'
import useEmblaCarousel from 'embla-carousel-react'
import LeaderboardTable from './components/LeaderboardTable'
import { WinLossChart, GoalsChart } from './components/Charts'
import TeamsCarousel from './components/TeamsCarousel'

function App() {
  
  // Obtém a tabela do brasileirão da API, guardando-as. 
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTable = async() => {
      try {
        const res = await bsa.get('/lookuptable.php?l=4351&s=2026');
        setTeams(res.data.table);
      } catch(error) {
        console.error("Erro na busca: ", error);
      } finally {
        setLoading(false);
      }
    };

    getTable();
  }, []);
    
      const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  
      const [currentIndex, setCurrentIndex] = useState(0)
  
      useEffect(() => {
          if (!emblaApi) return;
  
          const onSelect = () => {
            setCurrentIndex(emblaApi.selectedScrollSnap())
          };
  
          emblaApi.on('select', onSelect);
  
          onSelect();
  
          return () => emblaApi.off('select', onSelect)
      }, [emblaApi]);

  
  if(loading) return <p>Carregando...</p> 

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  const currentTeam = teams[currentIndex]


  return (
  <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
   
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '3em'}} >

      <div 
      style={{display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center', width:'500px'}}>
        
        <div
        style={{width: '8rem', marginBottom: '0px'}}>
          
          <img src="/BSAlogo.png" alt="BSA" srcset="" 
          style={{width: "100%", height: "100%", objectFit: 'contain'}}/>

        </div>
        
        <h1 style={{color: 'white', marginTop: '0px'}}>Brasileirão Série A</h1>

      </div>

    </div>

    <div className='mainContainer'>

      <LeaderboardTable teams={teams} />
      <TeamsCarousel 
      teams={teams}
      emblaRef={emblaRef}
      goToPrev={goToPrev}
      goToNext={goToNext}
      currentTeam={currentTeam}
      />

      </div>
      


    </div>

      
    )
}

export default App
