import { RatingProps } from "./Rating.props"
import styles from './Rating.module.css'
import cn from 'classnames'
import { useEffect, useState, KeyboardEvent } from "react"
import StarIcon from './star.svg'

export const Rating = ({iseditable = false, rating, setRating, ...props}: RatingProps):JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

    useEffect(()=>{
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i :number)=>{
            return (
                <span className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: iseditable
                })}
                onMouseEnter={()=> changedisplay(i+1)}
                onMouseLeave={()=> changedisplay(rating)}
                onClick={()=> onClickStar(i+1)}
                >
                <StarIcon
                tabIndex={iseditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGAElement>) => iseditable && handleSpace(i+1, e)}
                />
                </span>

                )
        });
        setRatingArray(updatedArray)
    };

    const changedisplay = (i:number) =>{
        if(!iseditable){
            return;
        }
        constructRating(i)
    }

    const onClickStar = (i:number) =>{
        if(!iseditable || !setRating){
            return;
        }
        setRating(i)
    }

    const handleSpace = (i:number, e: KeyboardEvent<SVGAElement>) =>{
        if(e.code != 'Space' || !setRating ){
            return;
        }
        setRating(i)
    }

    return (
        <div {...props}>
            {ratingArray.map((r,i)=> (<span key={i}>{r}</span>))}
        </div>
    )

}