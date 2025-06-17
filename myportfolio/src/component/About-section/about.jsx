import { useState } from "react"

export function About() {

    const defaultStyle = {
            height: '50px',
            width: '50px',
            backgroundColor: '#E5383B',
            borderRadius: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    };

    const hoverStyle = {
        ...defaultStyle,
        width: '120px',
    };

    const [facebookStyle, setFacebookStyle] = useState(defaultStyle);
    const [instagramStyle, setInstagramStyle] = useState(defaultStyle);
    const [textFacebook, setTextFacebook] = useState(false);
    const [textInstagram, setTextInstagram] = useState(false);

    return (
        <>
            <section className="container-fluid">
                <div className="row p-lg-5">
                    <div className="col-7" style={{paddingLeft: '120px', paddingRight: '120px'}}>
                        <h2 style={{
                            color: '#E5383B',
                            fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji'
                        }}>Welcome to my Portfolio</h2>
                        <p>I am <span style={{color: '#E5383B'}}>Rhinston Jones</span>. A professional photographer. I currently reside at beveryly Hills, North-carolina.</p>
                        <p>Of course, I love taking <span className="bi bi-images" style={{color: '#E5383B'}}></span> and I have won multiple awards and acquired many certificates</p>
                        <p>All necessary reference files and documents are available for download</p>
                        <div className="d-flex gap-1">
                            <div style={facebookStyle} onMouseOut={()=> {setFacebookStyle(defaultStyle); setTextFacebook(false);}} onMouseOver={()=> {setFacebookStyle(hoverStyle); setTextFacebook(true);}}>
                                <span className="bi bi-facebook">
                                    {
                                        textFacebook && <span style={{marginLeft: '5px', fontWeight: '500', transition: '0.3s ease'}}>FaceBook</span>
                                    }
                                </span>
                            </div>
                            <div style={instagramStyle} onMouseOut={()=> {setInstagramStyle(defaultStyle); setTextInstagram(false);}} onMouseOver={()=> {setInstagramStyle(hoverStyle); setTextInstagram(true);}}>
                                <span className="bi bi-instagram">
                                    {
                                        textInstagram && <span style={{marginLeft: '5px', fontWeight: '500', transition: '0.3s ease'}}>Instagram</span>
                                    }
                                </span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-5">
                        <img src="https://photographersportfolio.netlify.app/static/media/hero.c1be0f355031c7325340.jpg" alt="Profile=pic" width={380} />
                    </div>
                </div>
            </section>
        </>
    )
}