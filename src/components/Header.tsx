import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NaviagtionLink from "./shared/NaviagtionLink";

const Header = () => {
  const auth = useAuth();

  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NaviagtionLink
                bg="#00FFFC"
                to="/chat"
                text="Go to Chat"
                textColor="black"
              />
              <NaviagtionLink
                bg="#51538f"
                to="/"
                text="Logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NaviagtionLink
                bg="#00FFFC"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NaviagtionLink
                bg="#51538f"
                to="/signup"
                text="Signup"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
