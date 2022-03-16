import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";

import Logo from "./../assets/logo.png";

const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                right: 570,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start"
            }}>
                <Avatar image={Logo} />
            </div>
            <div>
                <StyledTitle size={45}>
                    Welcome to my first attempt at React
                </StyledTitle>
                <StyledSubTitle size={23}>
                    Feel free to try to register and log in
                </StyledSubTitle>

                <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
                <StyledButton to="/signup">Signup</StyledButton>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Home;