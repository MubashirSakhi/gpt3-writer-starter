import { useSession, signIn, signOut } from 'next-auth/react';

import Link from 'next/link';

export default function Header () {
    const { data: session } = useSession();
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }    
  const handleSignout = (e) => {
        e.preventDefault()
        signOut()
      }
    return (
        <div className='header'>
      <Link href='/' className='logo'>
        NextAuth.js
      </Link>
           {session && <Link href="#" onClick={handleSignout} className="btn-signin">Sign out</Link>  } 
           {!session && <Link href="#" onClick={handleSignin}  className="btn-signin">Sign in</Link>  } 
    </div>
    )
}