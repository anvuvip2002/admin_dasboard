import "./login.css";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // conset navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.email.value);
    fetch("https://uitcinema.devhungops.website/api/auth/admin/signin", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          window.location.replace("/");
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  };
  return (
    <div
      className="Auth-form-container"
      style={{ backgroundColor: "rgb(2, 114, 114)" }}
    >
      <form
        className="Auth-form"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "rgb(214, 213, 213)" }}
      >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đăng Nhập</h3>
          <div className="form-group mt-3">
            <label>Email </label>
            <div
              style={{
                display: "flex",
                marginTop: "15px",
                marginBottom: "10px",
              }}
            >
              <PersonIcon />
              <input
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <div
              style={{
                display: "flex",
                marginTop: "15px",
                marginBottom: "10px",
              }}
            >
              <KeyIcon />
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="d-grid gap-2 mt-3" style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Đăng Nhập
            </button>
          </div>
          <p
            className="forgot-password text-right mt-2"
            style={{
              color: "grey",
              fontSize: "15px",
              marginTop: "15px",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Quên <a href="#">mật khẩu ?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
