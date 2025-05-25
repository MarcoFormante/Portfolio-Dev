import Char from "./Char";


export default function CharAnimation({text}:{text:string}){
     
        return (
           [...text].map((char:string,i:number) => {
            const top =  150 + Math.floor(Math.random() * (window.innerHeight - 280))
            const left =  50 + Math.floor(Math.random() * (window.innerWidth - 150))
            const isEven = i % 2 === 0;
          
            return <Char char={char} top={top} left={left} isEven={isEven} fontSize="5em"/>
           })
        )
  }
