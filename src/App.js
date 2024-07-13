
import { useState } from 'react';
import data from './data';
import Tour from './components/Tour';


const App=() => {

  const [tours,setTours] = useState(data)

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0){
    return (
      <div className="refresh flex items-center justify-center flex-col h-[100vh] text-3xl font-bold gap-5 ">
        <h2>No Tours Left</h2>
        <button className=" mt-5 px-[80px] py-[10px] border-[1px] border-white cursor-pointer bg-gray-100 transition-all hover:bg-white hover:text-black hover:transition-all duration-200  " onClick ={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <div>
      <Tour tours ={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
