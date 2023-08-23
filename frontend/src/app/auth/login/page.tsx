'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';

import { AuthContext } from '@/context/AuthContext';
import { setCookie } from 'cookies-next';

export default function Login() {
  const router = useRouter();

  const { handleSetUserAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    const expires = new Date();
    expires.setHours(expires.getHours() + 1);
    expires.toLocaleDateString('pt-br');

    setCookie('user_type', 'c', { expires });

    handleSetUserAuthenticated({
      user_type: 'c',
      cad_razao_social: 'Razão Social Cliente LTDA'
    });

    router.push('/');
  };

  return (
    <h1>
      <button onClick={handleLogin}>Entrar</button>
    </h1>
  );
}
