import React, { useState, useEffect } from "react"



const url = "https://restcountries.com/v3/region/asia"

const App = () => {
  const [countries, setCountries] = useState([])
   const [langu, setlangu] = useState([])



  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
    

    }

    fetchCountries()
  }, [])


  return (
    <>
   <div class="grid">
      {
        countries.map(country => {
          
          const { numericCode, name, flags, capital,region,subregion,borders ,languages,ccn3} = country;
          const {common}=name ;
          var bor= borders;
          

    
          console.log(languages);
          {/* console.log(bor.join(', ')); */}

       


   
        const lang=JSON.stringify(languages)
    
          let text = " ";
          for (const x in languages) {
            text +=   languages[x]+" " ;
             console.log(text);
          }
                      


          return (
            <>



     
          <div class="grid-item">
            <div class="card">
              <img class="card-img" src={flags[1]} />
              <div class="card-content">
                <h1 class="card-header">{common}</h1>
                <p class="card-text">
              Capital:{capital[0]}
                </p>
              <p class="author-name">region:{region}</p>
                    <p class="paragraph">subregion:{subregion}</p>
                    <p class="paragraph1">borders:{bor+ " "}</p>
                    <p class="paragraph">languages:{text}</p>
              </div>
            </div>
          </div>

          



            </>

          )
        
          
        })
      }

        </div>

    </>
  )
}

export default App
