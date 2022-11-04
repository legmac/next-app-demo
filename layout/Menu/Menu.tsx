import styles from './Menu.module.css'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { firstLevelMenu } from '../../helpers/helpers'
import { motion } from 'framer-motion';


export const Menu = ():JSX.Element => {
const {menu, setMenu, firstCategory: firstCategory} = useContext(AppContext)
const router = useRouter()

const variants ={
    visible:{
        marginBottom: 20,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    },
    hidden: { marginBottom: 0}
}

const variantsChilder ={
    visible:{
        opacity: 1,
        height: 29
    },
    hidden: { opacity: 0, height: 0}
}

const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m=>{
        if(m._id.secondCategory == secondCategory){
            m.isOpen = !m.isOpen;
        }
        return m;
    }))
}

const buildFirstLevel =()=>{
    return <>
        {firstLevelMenu.map(m => (
            <div key={m.route}>
                <Link href={`/${m.route}`} legacyBehavior>
                    <a>
                        <div className={cn(styles.firstLevel, {
                            [styles.firstLevelActive]: m.id == firstCategory
                        })}>
                            {m.icon}
                            <span>{m.name}</span>
                        </div>
                    </a>
                </Link>
                {m.id == firstCategory && buildSecondLevel(m)}
            </div>
        ))}
    </>
}
const buildSecondLevel =(menuItem: FirstLevelMenuItem)=>{
    return (
        <div className={styles.secondBlock}>
            {menu.map(m => {
                if(m.pages.map(p=> p.alias).includes(router.asPath.split('/')[2])){
                    m.isOpen = true
                }
                return (
                <div key={m._id.secondCategory}>
                    <div className={styles.secondLevel} onClick={()=> openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                    <motion.div
                    layout
                    variants={ variants }
                    initial={m.isOpen? 'visible' : 'hidden'}
                    animate={m.isOpen? 'visible' : 'hidden'}
                    className={cn(styles.secondLevelBlock)}
                    >
                        {buildThirdLevel(m.pages, menuItem.route)}
                    </motion.div>
                </div>
         )})}
        </div>
    )
}
const buildThirdLevel = (page: PageItem[], route: string)=>{
    return (
        page.map(p=> (
            <motion.div key={p._id}
            variants={variantsChilder}
            >
                <Link href={`/${route}/${p.alias}`} legacyBehavior>
                <a className={cn(styles.thirdLevel, {
                    [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                })}>
                    {p.category}
                </a>
                </Link>
            </motion.div>
        ))
    )
}

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )

}

// useEffect(()=>{
//     setMenu && setMenu([]);
// })