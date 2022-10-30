import { TopPageComponentProps } from "./TopPageComponent.props"
import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import { Card, HhData, Htag, Tag } from "../../components"
import { TopLevelCategory } from "../../interfaces/page.interface"

export const TopPageComponent = ({page, prodcts, firstCategory }: TopPageComponentProps):JSX.Element => {
    return (
      <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {prodcts && <Tag color="gray" size="m">{prodcts.length}</Tag>}
        <span>Sortirovca</span>
      </div>

      <div>
        {prodcts && prodcts.map(p=> (<div key={p._id}>{p.title}</div>))}
      </div>

      <div className={styles.hhstytle}>
        <Htag tag="h2">Вакансии -  {page.category}</Htag>
        <Tag color="red" size="m">hh.ru</Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}

      </div>
    )

}