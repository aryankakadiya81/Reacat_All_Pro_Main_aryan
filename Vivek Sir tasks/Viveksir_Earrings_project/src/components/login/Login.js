import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Image from "../../Images/pic1.png";
import axios from "axios";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const reSetPassword = () => {
    history("/reset");
  };

  const goToRegister = () => {
    history("/register");
  };

  const login = async() => {
    try {
      const response = await fetch(
        "/login/loginusers",
        // user
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      console.log("response: " + response);
      alert("Login Successfully logged");
      history("/");
    } catch (error) {
      console.error(`error: ${error.message}`);
    }
  };
  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <Grid
            item
            xs={true}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${Image})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            sx={{ boxShadow: 4, borderRadius: "15px" }}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                style={{
                  fontFamily: "monospace",
                  fontSize: "30px",
                  fontWeight: "500",
                }}
              >
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 0 }}>
                <TextField
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  value={user.password}
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={
                    <Checkbox value="remember" color="primary" required />
                  }
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={login}
                  style={{
                    backgroundColor: "#2fbccc",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "10px",
                  }}
                >
                  <LoginRoundedIcon style={{ marginRight: "5px" }} />
                  Login
                </Button>
                <Grid container style={{ display: "flex", marginTop: "30px" }}>
                  <Grid>
                    <a href="#">
                      <span onClick={goToRegister} class="ml-2">
                        You don&#x27;t have an account?
                      </span>
                    </a>
                  </Grid>
                  <Grid item xs>
                    <div style={{ marginLeft: "60px" }}>
                      <a href="#" onClick={reSetPassword}>
                        Forgot Your Password?
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Login;
