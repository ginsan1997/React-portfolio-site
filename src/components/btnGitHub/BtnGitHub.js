import './style.css'
import gitIcon from './gitHub-black.svg'

const BtnGitHub = ({url}) => {
    return (  
                <a href={url} target="_blank" rel="noreferrer" className="btn-outline">
                    <img src={gitIcon} alt="" />
                    GitHub repo
                </a>


    );
}
 
export default BtnGitHub;