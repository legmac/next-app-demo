import styles from './Up.module.css'
import cn from 'classnames'
import UpIcon from './up.svg'
import { useScrollY } from '../../hooks/useScrollY'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'


export const Up = ():JSX.Element => {
    const controlls = useAnimation();
    const y = useScrollY()

    useEffect(()=>{
        controlls.start({opacity: y / document.body.scrollHeight})
    },[y, controlls])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <motion.button
        className={styles.up}
        onClick={scrollToTop}
        animate={controlls}
        initial={{opacity: 0}}
        >
            <UpIcon/>
        </motion.button>
    )

}