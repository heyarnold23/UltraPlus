import LoginForm from '../auth/LoginForm'
import styles from './LoginPage.module.css'

export default function LoginPage() {
    return (
        <>
            <div id={styles.page}>
                <div id={styles.picDiv} />
                <LoginForm />
            </div>
        </>
    );
}
