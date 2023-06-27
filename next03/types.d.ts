/* User Interface */
interface User {
  address: Address
  company: Company
  email: string
  id: number
  name: string
  phone: string
  username: string
  website: string
}

interface Address {
  city: string
  geo: Geo
  street: string
  suite: string
  zipcode: string
}

interface Geo {
  lat: string
  lng: string
}

interface Company {
  bs: string
  catchPhrase: string
  name: string
}
/* User Interface */

interface Post {
  body: string
  id: number
  title: string
  userId: number
}
