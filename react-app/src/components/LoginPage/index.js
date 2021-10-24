import { NavLink } from 'react-router-dom';
import LoginForm from '../auth/LoginForm'
import styles from './LoginPage.module.css'


export default function LoginPage() {
    return (
        <>
            <div id={styles.page}>
                <NavLink to='/'>
                <div id={styles.picDiv} />
                </NavLink>
                <LoginForm />
            </div>
        </>
    );
}
