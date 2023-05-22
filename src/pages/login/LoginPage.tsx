import "../../assets/scss/homestyle.scss";
import { Component } from "react";
import "../../assets/scss/login.scss";
import MyBookShelfLogo from "../../assets/images/MyBookShelfLogo.png";
import PasswordEyeIcon from "../../assets/images/icons/ic_eyeoff.svg";
import Button from "../../components/button";

interface CheckboxComponentState {
    isChecked: boolean;
}

class LoginPage extends Component<CheckboxComponentState, CheckboxComponentState> {
    constructor(props: CheckboxComponentState) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    handleCheckboxChange = () => {
        this.setState({ isChecked: !this.state.isChecked });
    };

    render() {
        const { isChecked } = this.state;

        return (
            <>
                <form action="" method="get">
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
                            <p className="email">Email</p>
                            <input type="email" name="" id="" />
                            <div className="password-container">
                                <p className="password">Password</p>
                                <input type="password" name="" id="" />
                                <img src={PasswordEyeIcon} alt="" srcSet="" />
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
                        <Button className="btn" isBlock isPrimary isGlowHover isLarge>
                            Login
                        </Button>
                        </div>
                        

                        <div className="register-container">
                            <p>New User? <span>Register here</span></p>
                            <p className="guest-btn">Use as Guest</p>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default LoginPage;
