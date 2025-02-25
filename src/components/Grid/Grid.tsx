import { CSSProperties, PropsWithChildren } from "react"
import styles from "./Grid.module.scss"
import classNames from "classnames"

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type GridProps = {
  columns?: Span
  mediumColumns?: Span
  largeColumns?: Span
  isNested?: boolean
}

export const Grid = ( {
  children,
  columns = 12,
  mediumColumns,
  largeColumns,
  isNested = false,
}: PropsWithChildren<GridProps> ) => {
  const style = {
    "--smallColumns": columns,
    "--mediumColumns": mediumColumns,
    "--largeColumns": largeColumns,
  }

  return (
    <div
      className={classNames( styles.grid, isNested || styles.containerRoot )}
      style={style as CSSProperties}
    >
      {children}
    </div>
  )
}

type CellProps = {
  span?: Span
  mediumSpan?: Span
  largeSpan?: Span
}

Grid.Cell = ( {
  children,
  span = 1,
  mediumSpan,
  largeSpan,
}: PropsWithChildren<CellProps> ) => {
  const style = {
    "--smallSpan": span,
    "--mediumSpan": mediumSpan,
    "--largeSpan": largeSpan,
  }
  return (
    <div className={styles.cell} style={style as CSSProperties}>
      {children}
    </div>
  )
}
