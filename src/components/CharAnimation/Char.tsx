interface CharProps{
  char:string,
  top:number,
  left:number,
  fontSize:string,
  isEven:boolean
}

export default function Char({char,top,left,fontSize,isEven}:CharProps){
    return (
        <div className={`char ${isEven ? "even" : "odd"}` } style={{top,left,fontSize}}>{char}</div>
    )
}