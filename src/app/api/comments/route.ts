import { comments } from "./data"
export const GET = () => {
    return Response.json(comments)
  }