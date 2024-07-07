export interface IUser {
  username: string;
  email: string;
  password: string;
}

export type OperationExp = {
  factorA: string,
  factorB: string,
  operator: string,
  level?: number
  options?: string[]
}

type User = {
  id: string,
  alias: string
}
export type UserAttempt = {
  id: string,
  user: User,
  createdAt: Date,
  isCorrect: boolean,
  arithmetic: OperationExp,
  result: number,
  correct: boolean
}