import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md';
}

export function Card({
  children,
  padding = 'md',
  shadow = 'sm',
  className = '',
  ...props
}: CardProps) {
  const classes = [
    styles.card,
    styles[`pad-${padding}`],
    styles[`shadow-${shadow}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
