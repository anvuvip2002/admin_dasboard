import "./login.css"
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
const Login = () => {
  return (
    <div className="Auth-form-container" style={{backgroundColor:"rgb(2, 114, 114)"}}>
      <form className="Auth-form" style={{backgroundColor:"rgb(214, 213, 213)"}}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Đăng Nhập</h3>
          <div className="form-group mt-3">
            <label>Email </label>
            <div style={{display:"flex", marginTop:"15px", marginBottom:"10px"}}><PersonIcon/>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <div style={{display:"flex", marginTop:"15px", marginBottom:"10px"}}><KeyIcon/>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
            </div>
          </div>
          <div className="d-grid gap-2 mt-3" style={{textAlign:"center"}}>
            <button type="submit" className="btn btn-primary">
              Đăng Nhập
            </button>
          </div>
          <p className="forgot-password text-right mt-2" style={{color:"grey", fontSize:"15px", marginTop:"15px", textAlign:"center", fontSize:"16px"}}>
            Quên <a href="#">mật khẩu ?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login