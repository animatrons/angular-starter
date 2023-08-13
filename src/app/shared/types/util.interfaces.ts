export interface NavTree {
  title: string
  icon?: string
  active?: boolean
  path?: string,
  children?: NavTree[],
}
