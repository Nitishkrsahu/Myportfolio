export const Resume = ()=>{
    return (
        <div className="d-flex gap-2">
            <button className="btn btn-outline-dark px-3">
                <span className="text-white">Download CV </span>
                 <img src="/resume/download.svg" alt="download-icon" />
            </button>
            <button className="btn btn-outline-warning px-3">
                <span>About </span>
                <img src="/resume/info.svg" alt="info-icon" />
            </button>
        </div>
    )
}