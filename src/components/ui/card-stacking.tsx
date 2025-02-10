import Page from '../../assets/notesWithGreenTop.svg';

export default function CardStacking() {
    return (
        <section className="px-12">
            <div className="max-w-lg relative">

                <input id="article-01" type="radio" name="slider" className="sr-only peer/01 " />
                <input id="article-02" type="radio" name="slider" className="sr-only peer/02" />
                <input id="article-03" type="radio" name="slider" className="sr-only peer/03" defaultChecked />
                <input id="article-04" type="radio" name="slider" className="sr-only peer/04" />
                <input id="article-05" type="radio" name="slider" className="sr-only peer/05" />


                <div className="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-indigo-300 peer-checked/01:relative peer-checked/01:z-50 peer-checked/01:translate-x-0 peer-checked/01:scale-100 peer-checked/01:[&>label]:pointer-events-none peer-checked/02:-translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/02:opacity-80 peer-checked/03:-translate-x-40 peer-checked/03:z-30 
                peer-checked/03:opacity-0   peer-checked/05:opacity-80 peer-checked/04:-translate-x-40 peer-checked/04:opacity-0 peer-checked/05:-translate-x-40">
                    <label className="absolute inset-0 cursor-pointer" htmlFor="article-01">
                        <img src={Page} alt="Article 01" className='min-h-[300px] min-w-[300px]' />
                    </label>
                </div>


                <div className="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/02:[&_article]:ring peer-focus-visible/02:[&_article]:ring-indigo-300 peer-checked/01:translate-x-20 peer-checked/01:scale-[83.75%] peer-checked/01:z-40 peer-checked/02:relative peer-checked/02:z-50 peer-checked/02:translate-x-0 peer-checked/02:scale-100 peer-checked/02:[&>label]:pointer-events-none peer-checked/03:-translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:-translate-x-40 peer-checked/04:z-30 peer-checked/05:-translate-x-40 peer-checked/05:opacity-0
                peer-checked/03:opacity-80  peer-checked/04:opacity-0 peer-checked/01:opacity-80 
                ">
                    <label className="absolute inset-0 cursor-pointer" htmlFor="article-02">
                        <img src={Page} alt="Article 02" className='min-h-[300px] min-w-[300px]' />
                    </label>
                </div>

                <div className="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/03:[&_article]:ring peer-focus-visible/03:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:z-30 peer-checked/02:translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:relative peer-checked/03:z-50 peer-checked/03:translate-x-0 peer-checked/03:scale-100 peer-checked/03:[&>label]:pointer-events-none peer-checked/04:-translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:-translate-x-40 peer-checked/05:z-30
                peer-checked/04:opacity-80 peer-checked/01:opacity-80 peer-checked/05:opacity-0 
                ">
                    <label className="absolute inset-0 cursor-pointer" htmlFor="article-03">
                    <img src={Page} alt="Article 03" className='min-h-[300px] min-w-[300px]' />
                    </label>
                </div>


                <div className="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/04:[&_article]:ring peer-focus-visible/04:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:opacity-0 peer-checked/02:translate-x-40 peer-checked/02:z-30 peer-checked/03:translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:relative peer-checked/04:z-50 peer-checked/04:translate-x-0 peer-checked/04:scale-100 peer-checked/04:[&>label]:pointer-events-none peer-checked/05:-translate-x-20 peer-checked/05:scale-[83.75%] peer-checked/05:z-40
                peer-checked/02:opacity-0   peer-checked/03:opacity-80 peer-checked/05:opacity-80
                ">
                    <label className="absolute inset-0 cursor-pointer" htmlFor="article-04">
                    <img src={Page} alt="Article 04" className='min-h-[300px] min-w-[300px]' />
                    </label>
                </div>

                <div className="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/05:[&_article]:ring peer-focus-visible/05:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/02:translate-x-40 peer-checked/03:translate-x-40 peer-checked/03:z-30 peer-checked/04:translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:relative peer-checked/05:z-50 peer-checked/05:translate-x-0 peer-checked/05:scale-100 peer-checked/05:[&>label]:pointer-events-none
                peer-checked/01:opacity-0 peer-checked/02:opacity-0  peer-checked/04:opacity-80 peer-checked/03:opacity-0 
                ">
                    <label className="absolute inset-0 cursor-pointer" htmlFor="article-05">
                    <img src={Page} alt="Article 05" className='min-h-[300px] min-w-[300px]' />
                    </label>
                </div>
            </div>
        </section>
    );
}
