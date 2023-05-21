
import { HiMenuAlt3, HiHome, HiViewGrid } from 'react-icons/hi'
import { BiCabinet, BiExit } from 'react-icons/bi'
import { BsCartPlusFill, BsGraphUpArrow, BsFillGearFill } from 'react-icons/bs'
import { useState } from 'react'


export function NavBar(){
    const[open, setOpen] = useState(false)

    return(
        
        <section className="flex flex-col gap-6">
            
            <div className={`${open ? "w-72":"w-16"} duration-300 bg-slate-100 text-black min-h-screen w-70 flex flex-col gap-7`}>
                <h1 className={`${open ? "text-2xl font-semibold": "text-3xl font-bold"} text-center text-2xl duration-300 pt-2`}>{open ? "Altas Horas" : "AH"}</h1>

                <div className="py-3 flex justify-end" onClick={() => setOpen(!open)}>
                    <HiMenuAlt3 size={54} className='cursor-pointer px-4'/>
                </div>
                    
                <div className='flex gap-1 justify-around'>
                    <HiHome size={22}/>
                    <p>Home</p>
                </div>

                <div className='flex gap-1 justify-center'>
                    <BsCartPlusFill size={22} />
                    <p>Venda</p>

                </div>

                <div className='flex gap-1 justify-center'>
                    <HiViewGrid size={22}/>
                    <p>Produtos</p>
                </div>

                <div className='flex gap-1 justify-center'>
                    <BiCabinet size={22}/>
                    <p>Estoque</p>
                </div>

                <div className='flex gap-1 justify-center'>
                    <BsGraphUpArrow size={22}/>
                    <p>Relatórios</p>
                </div>

                <div className='flex gap-1 justify-center mt-24'>
                    <BsFillGearFill size={22}/>
                    <p>Configurações</p>
                </div>

                <div className='flex gap-1 justify-center'>
                    <BiExit size={22}/>
                    <p>Sair</p>
                </div>

            </div>
   
        </section>
           )
}