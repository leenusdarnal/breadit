import { db } from '@/lib/db'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { nanoid } from 'nanoid'
import { NextAuthOptions, getServerSession } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

export const authoptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    GitHubProvider({
      clientId: 'b75c7b0eca22932a34b4',
      clientSecret: 'a6368b7892f2e4a692b5bceb15656cac0520affd',
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
        session.user.username = token.username
      }
      return session
    },
    async jwt({ token, user }) {
      const dbuser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbuser) {
        token.id = user.id
        return token
      }
      if (!dbuser.username) {
        await db.user.update({
          where: {
            id: dbuser.id,
          },
          data: {
            username: nanoid(10),
          },
        })
      }
      return {
        id: dbuser.id,
        name: dbuser.name,
        email: dbuser.email,
        picture: dbuser.image,
        username: dbuser.username,
      }
    },
    async redirect() {
      return '/'
    },
  },
}

export const getAuthSession = () => getServerSession(authoptions)
