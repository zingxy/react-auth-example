import { useContext } from 'react';
import { AuthContext } from '../context/AuththProvider';

export default function useAuth() {
  return useContext(AuthContext);
}
