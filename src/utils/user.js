const USER = 'USER'
export function setUSER (user) {
  return localStorage.setItem(USER, user)
}

export function getUSER () {
  return localStorage.getItem(USER)
}
export function removeUSER () {
  return localStorage.removeItem(USER)
}
