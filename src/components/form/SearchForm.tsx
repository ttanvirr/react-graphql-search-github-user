import type React from "react"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { useState } from "react"
import { toast } from "sonner"

type SearchFormProps = {
  userName: string
  setUserName: React.Dispatch<React.SetStateAction<string>>
}

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName)

  const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim() === "") {
      toast.error("Please enter a valid username")
      return
    }
    setUserName(text)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        id="search"
        type="search"
        placeholder="Search Github User..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="grow bg-background"
      />
    </form>
  )
}

export default SearchForm
