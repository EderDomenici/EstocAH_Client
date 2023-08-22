
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiHome, HiViewGrid } from 'react-icons/hi'
import { BiCabinet, BiExit } from 'react-icons/bi'
import { BsCartPlusFill, BsGraphUpArrow, BsFillGearFill } from 'react-icons/bs'
import { useState } from 'react'


export function NavBar(){
    const[open, setOpen] = useState(false)
    const pVariants = {
        hidden:{opacity: 0},
        visible:{opacity:1},
    }
    const iVariants = {
        hidden:{scale:1.1},
        visible:{scale: 0.8}

    }



    return(
        <section className='flex'>

            <motion.div initial={{width:80}}
                        animate={{width: open ? 288 :80}}
                        transition={{duration:1.0}}
                        className='bg-white min-h-screen text-black w-72 flex flex-col gap-3'>

                    <div onClick={() => setOpen(!open)}
                         className = "flex justify-end">
                        <HiMenuAlt3 size={60} className='cursor-pointer px-4'/>
                    </div>

                    <h1 className='flex font-bold text-4xl justify-center transition-transform duration-900 m-4'>
                                    {open? 'Altas Horas':'AH'}
                    </h1>
        
                    <motion.div 
                                initial={open ? 'visible':'hidden'}
                                animate={open? 'visible':'hidden'}
                                transition={{duration:0.9}}>

                        <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>

                            <HiHome size={30} className='text-black'/>

                        </motion.i>

                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{duration:0.9,delay:0.3}}
                            >
                                Home
                        </motion.p>
                        
                    </motion.div>

                    <div className={`${open? 'flex gap-4 text-lg font-semibold hover:bg-purple-400 rounded-full cursor-pointer justify-center items-center':'flex flex-col justify-center items-center text-white'}`}>
                    <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>

                        <BsCartPlusFill size={30} className='text-black'/>
                    </motion.i>
                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{delay:0.3, duration:0.9}}
                            >
                                Venda
                        </motion.p>
                    </div>

                    <div className={`${open? 'flex gap-4 text-lg font-semibold hover:bg-purple-400 rounded-full cursor-pointer justify-center items-center':'flex flex-col justify-center items-center text-white'}`}>
                        <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>

                            <HiViewGrid size={30} className='text-black'/>

                        </motion.i>

                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{delay:0.4,duration:0.9}}
                            >
                                Produtos
                        </motion.p>
                    </div>

                    <div className={`${open? 'flex gap-4 text-lg font-semibold hover:bg-purple-400 rounded-full cursor-pointer justify-center items-center':'flex flex-col justify-center items-center text-white'}`}>
                        <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>


                            <BiCabinet size={30} className='text-black'/>
                        </motion.i>

                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{delay:0.5,duration:0.9}}
                            >
                                Estoque
                        </motion.p>
                    </div>

                    <div className={`${open? 'flex gap-4 text-lg font-semibold hover:bg-purple-400 rounded-full cursor-pointer justify-center items-center':'flex flex-col justify-center items-center text-white'}`}>
                        <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>

                            <BsGraphUpArrow size={30} className='text-black'/>
                        </motion.i>

                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{delay:0.6,duration:0.9}}
                            >
                                Relatórios
                        </motion.p>
                    </div>

                    <div className={`${open? 'flex gap-4 text-lg font-semibold hover:bg-purple-400 rounded-full cursor-pointer justify-center items-center':'flex flex-col justify-center items-center text-white'}`}>
                        <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>

                            <BsFillGearFill size={30} className='text-black'/>
                        </motion.i>

                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{delay:0.7,duration:0.9}}
                            >
                                Configurações
                        </motion.p>
                    </div>

                    <div className={`${open? 'flex gap-4 text-lg font-semibold hover:bg-purple-400 rounded-full cursor-pointer justify-center items-center':'flex flex-col justify-center items-center text-white'}`}>
                        <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>

                            <BiExit size={30} className='text-black'/>
                        </motion.i>

                        <motion.p
                            variants={pVariants}
                            initial="hidden"
                            animate={ open ? "visible": "hidden" }
                            transition = {{delay:0.8,duration:0.9}}
                            >
                                Sair
                        </motion.p>
                    </div>





            </motion.div>

            <div>

            </div>
        </section>

           )
}

/*

                    <motion.i variants={iVariants}
                                  initial={open? 'visible':'hidden'}
                                  animate={open? 'visible':'hidden'}
                                  transition={{duration:0.9}}>


                    </motion.i>


                    <div className={`${open ? "w-72":"w-16"} duration-700 bg-slate-100 text-black min-h-screen w-70 flex flex-col gap-9`}>
                    </div>
                  

                    <div className='flex gap-1 justify-center'>
                        <BsCartPlusFill size={22} />
                        <p>Venda</p>

                    </div>

                    <div className='flex gap-1 justify-center'>
                        <HiViewGrid size={22}/>
                        <p></p>
                    </div>


                <div className="flex w-auto justify-end" onClick={() => setOpen(!open)}>
                    
                </div>

                

                <div className='flex gap-1 justify-center'>
                    
                    <p></p>
                </div>

                <div className='flex gap-1 justify-center'>
                    
                    <p></p>
                </div>

                <div className='flex gap-1 justify-center mt-72'>
                    
                    <p>Configurações</p>
                </div>

                <div className='flex gap-1 justify-center'>
                    
                    <p>Sair</p>
                </div>*/