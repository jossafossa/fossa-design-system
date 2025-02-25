export type HasLoader<T> = Partial<T> & {
  isLoading: boolean;
} | T & {
  isLoading?: false;
}