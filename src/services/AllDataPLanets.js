import Planets from "./Planets"


export default function AllDataPLanets({id=null}={}){

const PLANETSINFO = Planets();

return (id === null)? PLANETSINFO : [PLANETSINFO[id]] 

}


