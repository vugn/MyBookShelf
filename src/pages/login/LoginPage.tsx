import "../../assets/scss/homestyle.scss";
import { Component } from "react";
import "../../assets/scss/login.scss";
import MyBookShelfLogo from "../../assets/images/MyBookShelfLogo.png";
import PasswordEyeIcon from "../../assets/images/icons/ic_eyeoff.svg";
import Button from "../../elements/Button";
import { setToken } from '../../configs/token'

import login from '../../configs/axios/auth/login'

interface LoginPageState {
    isChecked: boolean;
    username: string;
    password: string;
    isButtonClick: boolean;
    isPasswordShowed: boolean;
}


class LoginPage extends Component<LoginPageState, LoginPageState> {
    constructor(props: LoginPageState) {
        super(props);
        this.state = {
            isChecked: false,
            username: '',
            password: '',
            isButtonClick: false,
            isPasswordShowed: false
        };
    }

    handleCheckboxChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
    };
    handlePasswordShowChange = () => {
        this.setState({ isPasswordShowed: !this.state.isPasswordShowed });
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        this.setState({ [name]: value } as unknown as Pick<LoginPageState, keyof LoginPageState>);
    };

    handleLogin = () => {
        const { username, password, isButtonClick } = this.state;
        this.setState({ isButtonClick: true })
        if (isButtonClick == false) {
            login.getData(username, password).then((response) => {
                const { token, ...userData } = response.data
                setToken(
                    token,
                    1209600,
                    userData,
                )
                this.setState({ isButtonClick: false })
            }).catch((error: unknown) => {
                console.log(error)
                console.error('Login Failed')
                this.setState({ isButtonClick: false })
            })
        }
    };

    render() {
        const { isChecked, username, password, isButtonClick, isPasswordShowed } = this.state;

        return (
            <>
                <div className="form-container">
                    <img
                        className="form-logo"
                        src={MyBookShelfLogo}
                        alt=""
                        srcSet=""
                        width={150}
                    />
                    <h2>Welcome Back !</h2>
                    <h3>Sign in to continue to yourDigital Library</h3>

                    <div className="auth-container">
                        <p className="email" >Email</p>
                        <input type="text" name="username" id="username" value={username} onChange={this.handleInputChange} />
                        <div className="password-container">
                            <p className="password">Password</p>
                            <input type={isPasswordShowed ? "text" : "password"} name="password" id="password" value={password} onChange={this.handleInputChange} />
                            <img onClick={this.handlePasswordShowChange} src={PasswordEyeIcon} alt="" srcSet="" />
                        </div>
                    </div>

                    <div className="form-accesibility">
                        <div className="rememberme-container">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={this.handleCheckboxChange}
                                value="lsRememberMe"
                                id="rememberMe"
                            />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <p className="forgot-btn">Forgot password?</p>
                    </div>

                    <div className="login-btn-container">
                        <Button className="btn" isBlock isPrimary isGlowHover isLarge isLoading={isButtonClick ? "true" : "false"} onClick={this.handleLogin}>
                            Login
                        </Button>
                    </div>


                    <div className="register-container">
                        <p>New User? <span>Register here</span></p>
                        <p className="guest-btn">Use as Guest</p>
                    </div>
                </div>
            </>
        );
    }
}

export default LoginPage;
