import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CarsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'white'|'blue';
    children: ReactNode;
}