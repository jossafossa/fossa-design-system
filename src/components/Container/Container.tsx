import { PropsWithChildren } from "react"
import styles from "./Container.module.scss"
import classNames from "classnames"

type ContainerProps = {
  width?: "narrow" | "wide"
}

export const Container = ( { children, width = "wide" }: PropsWithChildren<ContainerProps> ) => {
  return <div className={classNames( styles.container, styles[ width ] )}>{children}</div>
}
