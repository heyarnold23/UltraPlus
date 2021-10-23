import SignUpForm from '../auth/SignUpForm'
import styles from './SignUpPage.module.css'
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
    return (
        <>
            <div id={styles.page}>
                <NavLink to='/'>
                    <div id={styles.picDiv} />
                </NavLink>
                <SignUpForm />
            </div>
        </>
    );
}
