export interface ItemInterface {
    item: {
      id: number,
      title: string,
      color: string
    },
    onPress(): void,
    backgroundColor: any,
    textColor: any
}