export interface characterTypes {
  id: number
  name: string
  ki: string
  maxKi: string
  race: string
  gender: string
  description: string
  image: string
  affiliation: string
  isDefault?: boolean
}

export interface loginFormTypes {
  email: string
  password: string
  name: string
}
