import { IApiInterface } from "./IApiInterface"

export type ItemInterface = {
  item: IApiInterface,
  onPress(): void,
  backgroundColor: {
    backgroundColor: string
  }
}