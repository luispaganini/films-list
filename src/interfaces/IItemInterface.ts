import { IApiInterface } from "./IApiInterface"

export interface ItemInterface {
  item: IApiInterface,
  onPress(): void,
  backgroundColor: {
    backgroundColor: string
  },
  textColor?: {
    color: string
  }
}