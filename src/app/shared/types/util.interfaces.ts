export interface NavTree {
  title: string
  active?: boolean
  path?: string,
  children?: NavTree[],
}
