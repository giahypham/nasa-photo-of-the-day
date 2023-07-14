import React, { useState, useEffect} from "react";
import axios from 'axios'; 
import "./App.css";

import NasaPhoto from "./Components/nasaPhoto";

function App() {
 
  const [data, setData] = useState();

  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res =>{
        setData(res.data);
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      {data && <NasaPhoto photo = {data}/>}
    </div>
  )
}

export default App;

/** 
 date: 
"2023-07-13"
explanation: 
"A mere 390 light-years away, Sun-like stars and future planetary systems are forming in the Rho Ophiuchi molecular cloud complex, the closest star-forming region to our fair planet. The James Webb Space Telescope's NIRCam peered into the nearby natal chaos to capture this infrared image at an inspiring scale. The spectacular cosmic snapshot was released to celebrate the successful first year of Webb's exploration of the Universe. The frame spans less than a light-year across the Rho Ophiuchi region and contains about 50 young stars. Brighter stars clearly sport Webb's characteristic pattern of diffraction spikes. Huge jets of shocked molecular hydrogen blasting from newborn stars are red in the image, with the large, yellowish dusty cavity carved out by the energetic young star near its center. Near some stars in the stunning image are shadows cast by their protoplanetary disks."
hdurl: 
"https://apod.nasa.gov/apod/image/2307/STScI-01_RhoOph.png"
media_type: 
"image"
service_version: 
"v1"
title: 
"Webb's Rho Ophiuchi"
url: 
"https://apod.nasa.gov/apod/image/2307/STScI-01_RhoOph1024.png"
 */