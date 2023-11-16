export interface NavTree {
  title: string
  icon?: string
  active?: boolean
  disabled?: boolean
  path?: string,
  children?: NavTree[],
}
