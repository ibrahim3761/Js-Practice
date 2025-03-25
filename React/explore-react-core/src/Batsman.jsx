import { useState } from "react"

export default function Batsman(){

    const [runs, setRuns] = useState(0);

    const [sixes,setSixes] = useState(0);

    const [fours,setFours] = useState(0);

    function handleSix(){
        setRuns(runs+6);
        setSixes(sixes+1);
    }
    function handleFours(){
        setRuns(runs+4);
        setFours(fours+1);
    }
    return(
        <div>
            <h3> Player: Bangla Batsman </h3>
            <p>Sixes: {sixes}</p>
            <p>Fours:{fours}</p>
            {
                runs>=50 && <p>Half Century</p>
            }
            {
                runs>=100 && <p>Century</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={()=>setRuns(runs+1)}>single</button>
            <button onClick={()=>setRuns(runs+2)}>double</button>
            <button onClick={()=>setRuns(runs+3)}>three</button>
            <button onClick={handleFours}>four</button>
            <button onClick={handleSix}>six</button>
            <button onClick={()=>setRuns(0)}>Out</button>
        </div>
    )
}