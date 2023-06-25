import { g, config } from '@grafbase/sdk'

const User = g.model("users", {
  name: g.string().length({min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(()=> Projects).list().optional()
})

const Projects = g.model("projects",
    {
      title: g.string().length({min:3}),
      description: g.string().optional(),
      image: g.url(),
      liveSiteUrl: g.url().optional(),
      githubUrl: g.url().optional(),
      category: g.string().search(),
      createdBy: g.relation(()=> User)
    }
)
export default config({
  schema: g

})
