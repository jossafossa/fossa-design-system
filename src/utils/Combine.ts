export type Combine<Object1, Object2> = Omit<Object1, keyof Object2> & Object2;
