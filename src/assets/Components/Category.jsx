import React, { useEffect, useRef } from 'react'
import Salmon from '../Category/salmon.png'
import CategoryCard from './Part/CategoryCard'
import Kebab from '../Category/kebab.png'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Cupcake from '../Category/Cupcake.png'
import Pizza from '../Category/Pizza.png'
import Doughnut from '../Category/Doughnut.png'



export default function Category() {
  let Handle = useRef();

  const Next = () => {
    // Handle.current.scrollTo({left: Handle.current.scrollX-1})
    // console.log(Handle.current.scrollX);
    // window.scrollTo({top: Handle.scrollX-1})
    Handle.current.scrollLeft += 250

    console.log(Handle.current.scrollLeft - 100);
  }

  const Prev = () => {
    Handle.current.scrollLeft -= 250

  }
  

  return (
    <section className='container mx-auto px-5 py-5 my-5 '>

      <div>
        <span className='text-trending'> Browser Our Category
          <p className='text-primary-1'>Receipt</p> </span>
      </div>

      {/* Product */}
      <div className='flex flex-row gap-5  overflow-x-scroll w-full snap-x snap-mandatory' ref={Handle}>
       
            <CategoryCard title="Cupcake" bg="#F0FEEB" count="22 items" img={Cupcake} />
            <CategoryCard title="Pizza" bg="#E4F2F4" count="25 items" img={Pizza} />
            <CategoryCard title="Kebab" bg="#EAEEFA" count="12 items" img={Kebab} />
            <CategoryCard title="Salmon" bg="#F9EEF3" count="22 items" img={Salmon} />
            <CategoryCard title="Dougnnut" bg="#F3F7D9" count="11 items" img={Doughnut} />
            <CategoryCard title="Dougnnut" bg="#F3F7D9" count="11 items" img={Doughnut} />
            <CategoryCard title="Dougnnut" bg="#F3F7D9" count="11 items" img={Doughnut} />
            <CategoryCard title="Dougnnut" bg="#F3F7D9" count="11 items" img={Doughnut} />
      </div>

      {/* Controller */}
      <div className='lg:flex lg:flex-row justify-end gap-5 mt-7 hidden'>
        <button className='bg-primary-1 w-[114px] h-[50px] flex flex-row justify-center gap-3 items-center rounded-full px-5' onClick={() => Prev()} ><IoIosArrowDropleftCircle className='text-white' size={40} /> <span className='font-bold text-base leading-[19px] text-center text-white'>PREV </span>  </button>
        <button className='bg-primary-1 w-[114px] h-[50px] flex flex-row justify-center gap-3 items-center rounded-full px-5'onClick={() => Next()}> <span className='font-bold text-base leading-[19px] text-center text-white'>NEXT </span><IoIosArrowDroprightCircle className='text-white' size={40} />  </button>
      </div>
    </section>
  )
}

