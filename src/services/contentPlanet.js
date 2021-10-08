import AllDataPLanets from "./AllDataPLanets";

export default function contentPlanet({elem=null}={}){      
   if(elem !== null){
      const PLANETSINFO= AllDataPLanets({id:elem})
      const {overview, structure,geology} = PLANETSINFO[0]
      return {overview, structure,geology}
   } 
}