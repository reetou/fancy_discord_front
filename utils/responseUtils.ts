
export function toLogin() {
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  }
}
