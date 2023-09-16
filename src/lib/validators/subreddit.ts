import { z } from 'zod'

export const SubRedditValidator = z.object({
  name: z.string().min(3).max(21),
})

export const SubRedditSubcriptionValidator = z.object({
  subRedditId: z.string(),
})

export type CreateSubRedditPayLoad = z.infer<typeof SubRedditValidator>
export type SubscribeToSubredditPayload = z.infer<
  typeof SubRedditSubcriptionValidator
>
