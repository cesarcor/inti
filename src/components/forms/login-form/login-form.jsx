import React from 'react';
import styles from './login-form.module.scss';

const LoginForm = () => {
	return (
		<div>
			<form className={styles.login_form}>
				<div className={styles.login_form__section}>
					<label htmlFor='email' className={styles.login_form_label}>
						Email
					</label>
					<input type='email' id='email' className={styles.login_form_field} />
				</div>
				<div className={styles.login_form__section}>
					<label htmlFor='password' className={styles.login_form_label}>
						Password
					</label>
					<input
						type='password'
						id='password'
						className={styles.login_form_field}
					/>
				</div>
				<div className={styles.login_form__section}>
					<button className={styles.login_form_button} type='submit'>
						Login
					</button>
				</div>
				<div className={styles.login_form__section}>
					<a href='#'>Forgot Password</a>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
