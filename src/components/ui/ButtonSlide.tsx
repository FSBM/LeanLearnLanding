interface Props{
    Text:string
}

export default function ButtonSlide({ Text }: Props){

    return(<>
        <button className="
      relative z-20 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
      border-white px-4 py-2 font-semibold
      uppercase text-white transition-all duration-500
      before:absolute before:inset-0
      before:-z-10 before:translate-x-[150%]
      before:translate-y-[150%] before:scale-[2.5]
      before:rounded-[100%] before:bg-white
      before:transition-transform before:duration-1000
      before:content-[&quot;&quot;]
      hover:scale-105 hover:text-neutral-900
      hover:before:translate-x-[0%]
      hover:before:translate-y-[0%]
      active:scale-95"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg><span>{Text}</span></button></>)

}