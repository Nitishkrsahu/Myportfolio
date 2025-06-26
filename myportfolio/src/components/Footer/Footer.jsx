
export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="row" style={{ color: '#FE0087' }}>
        <div className="d-flex gap-3 col-lg-6 justify-content-center align-items-center mb-1">
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1" 
          style={{
            width: '30px', height: '30px'
          }}>
            <img src="/footer/Facebook.svg" alt="fackbook-icon" width={20} height={20}/>
          </div>
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1" 
          style={{
            width: '30px', height: '30px'
          }}>
            <img src="/footer/Github.png" alt="Github-icon" width={30} height={30}/>
          </div>
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1" 
          style={{
            width: '30px', height: '30px'
          }}>
            <img src="/footer/LinkedIn.svg" alt="Linkedin-icon" width={20} height={20}/>
          </div>
          <div className="btn btn-dark p-2 d-flex justify-content-center align-items-center rounded rounded-1"
           style={{
            width: '30px', height: '30px'
           }}>
            <img src="/footer/Twitter.svg" alt="Twitter-icon" width={20} height={20}/>
          </div>
        </div>
        <div className="text-center col-lg-6">
          <p className="fw-bold">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
