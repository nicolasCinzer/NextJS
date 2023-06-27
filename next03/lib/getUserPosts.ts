export default async function getUserPosts(userId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)

  if (!res.ok) throw new Error('Failed to fetch a User')

  return res.json()
}
