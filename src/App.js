import React, {useState, useEffect} from 'react';
import Page from './components/Page';

const App = () => {
  const [ chartData, setChartData ] = useState( {} )
  const [ options, setOptions ] = useState( {} )
   
  
  useEffect( () => {
    getData()
  })


  //Set Data to State
  const getData = () => {
    setChartData( {
      labels: [ 'Lagos', 'Ibadan', 'Ondo', 'Ekiti', 'Enugu', 'Gombe', 'Adamawa', 'Kogi' ],//End Of labels
      datasets: [ {
        label: 'Poupulation',
        data: [
          78000,
          60790,
          78543,
          45743,
          67854,
          97543,
          34765,
          35577
        ],//End of Data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(25, 39, 200, 0.6)',
          'rgba(255, 109, 32, 0.6)',
          'rgba(75, 100, 232, 0.6)',
          'rgba(255, 190, 12, 0.6)',
          'rgba(90, 142, 255, 0.6)',
          'rgba(132, 99, 255, 0.6)',
          'rgba(78, 140, 200, 0.6)'
        ],//End of bgColor
        fill: true
      }]//End of dataSets
    } )///End of Set Chart Data
    
    setOptions( {
      title: {
        display: true,
        text: 'Largest Cities In Nigeria',
        fontsize:30
      },// End Of title
      legend: {
        display: true,
        position: 'right'
      }// End Of legend
    })

   }// End Get Data
  
   

  return (
    <React.Fragment>
      
        
     <Page chartData={chartData} options={options} />
        
     
      
      
    </React.Fragment>
  )
}

export default App;