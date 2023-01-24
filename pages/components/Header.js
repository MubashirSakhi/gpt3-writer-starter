import { useSession, signIn, signOut } from 'next-auth/react';
import { Container, Row, Col } from 'react-bootstrap';
import Classes from './header.module.css';
import Link from 'next/link';

export default function Header() {
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
    <div className={Classes.header}>
      <Container className={Classes.container}>
        <Row className={Classes.row}>
          <Col md={{ span: 6 }} className={Classes.logo}>
            <Link href='/'>
              <img src="/pitchwise_logo.png" />
            </Link>
          </Col>
          <Col md={{ span: 6 }} className={Classes.navBtn}>
            {session && <Link href="#" onClick={handleSignout} className="btn-signin">Sign out</Link>}
            {!session && <Link href="#" onClick={handleSignin} className="btn-signin">Sign in</Link>}
          </Col>
        </Row>
      </Container>


    </div>
  )
}