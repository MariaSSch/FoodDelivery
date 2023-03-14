import { useSelector } from 'react-redux';

export function useAuth() {

    const {user} = useSelector(state => state.auth.registeredUsers)

  return {
    isAuth: !!{user},
    user
  }
}


