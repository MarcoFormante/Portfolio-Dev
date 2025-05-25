interface CharProps{
  char:string,
  top:number,
  left:number,
  isEven:boolean
}

export default function Char({char,top,left,isEven}:CharProps){
    return (
        <div className={`char ${isEven ? "even" : "odd"}` } style={{top,left}}>{char}</div>
    )
}