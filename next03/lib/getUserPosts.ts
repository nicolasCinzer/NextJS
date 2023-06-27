export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}
