import { User } from "./User";

export interface Comments{
    id: number,
    user: User,
    time: string,
    body: string,
    replies: Comments[]
}