import "./LoginForm.css"

const LoginForm = ({ credentials, loginMessage, onLoginSubmit, handleChange }) => {
    return (
        <div className="loginParent">
            <form className="loginForm" onSubmit={onLoginSubmit}>
                <h1>Login</h1>
                {loginMessage}
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                    value={credentials.email}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

export default LoginForm;