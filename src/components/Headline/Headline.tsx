import { Heading } from "@components"
import { ComponentProps } from "react"
import styles from "./Headline.module.scss"

export const Headline = ( {
  children,
  ...props
}: ComponentProps<typeof Heading> ) => {
  return (
    <Heading {...props} className={styles.headline}>
      {children}
    </Heading>
  )
}
