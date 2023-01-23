import { getProviders, signIn, getSession, getCsrfToken } from "next-auth/react";
import Classes from "./signin.module.css";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function signin({ csrfTokens, providers }) {
    return (

        <Container className={Classes.container} >
            <Row className={Classes.row}>
                <Col className={Classes.column} md={{ span: 4 }}>
                    <img src="/pitchwise_logo_dark.png"/>
                    <h1>Become a member</h1>
                    <p>Get onboard to get great features from Pitch Wise</p>

                    <div>
                        {Object.values(providers).map((provider) => {
                            return (
                                <div key={provider.name}>
                                    <button className={Classes.signinBtn} onClick={() => signIn(provider.id)}>
                                        Sign in with {provider.name}
                                    </button>
                                </div>
                            );
                        })}
                        <div>
                            <button className={Classes.signinBtn}>
                                Sign in with Facebook
                            </button>
                        </div>
                    </div>
                </Col>
            </Row >
        </Container >


    );
}

export default signin;

// export async function getServerSideProps(context) {
//     const { req } = context;
//     const session = await getSession({ req });
//     if (session) {
//         return {
//             redirect: { destination: "/" },
//         };
//     }

//     return {
//         props: {
//             providers: await getProviders(context),
//             csrfToken: await getCsrfToken(context),
//         },
//     };
// }
export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getSession({ req });
    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)
    if (session) {
        return {
            redirect: { destination: "/" },
        };
    }
    return {
        props: {
            providers,
            csrfToken
        },
    }
}