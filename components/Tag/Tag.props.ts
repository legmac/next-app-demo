import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 's'|'m';
    children: ReactNode;
    color?: 'ghoust'|'red'|'gray'|'green'|'primary'
    href?: string
}