import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    iseditable?: boolean
    rating: number
    setRating?: (rating: number) => void
}