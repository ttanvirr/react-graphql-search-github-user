import { Button } from "../ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"

type UserCardProps = {
  avatarUrl: string
  name: string
  bio: string
  url: string
}
const UserCard = ({ avatarUrl, name, bio, url }: UserCardProps) => {
  return (
    <Card className="w-full lg:w-1/2 mb-8">
      <CardHeader className="flex gap-x-8 items-center">
        <img
          src={avatarUrl}
          alt={name}
          className="w-36 h-36 object-cover rounded"
        />
        <div className="flex flex-col gay-y-2">
          <CardTitle>{name || "Codding Hero"}</CardTitle>
          <CardDescription>
            {bio || "An awesome software developer"}
          </CardDescription>
          <Button asChild size="sm" className="w-1/2 mt-2">
            <a href={url} target="_blank" rel="noreferrer">
              Follow
            </a>
          </Button>
        </div>
      </CardHeader>
    </Card>
  )
}

export default UserCard
