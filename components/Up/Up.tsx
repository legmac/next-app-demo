import styles from './Up.module.css'
import cn from 'classnames'
import UpIcon from './up.svg'
import { useScrollY } from '../../hooks/useScrollY'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'


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
        <motion.div
        className={styles.up}
        animate={controlls}
        initial={{opacity: 0}}
        >
            <ButtonIcon appearance='primary' icon='up' onClick={scrollToTop}/>
        </motion.div>
    )

}