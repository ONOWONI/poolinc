import profilePic from '../img/guy1.jpg'
import sadesh from '../img/sadesh.jpg'
import hotGirl from '../img/hot_girl_thumb.jpg'
import european from '../img/european.jpg'
import boy3 from '../img/boy3_thumb.jpg'

export default function Professionals() {
    return (
        <div id="pros">
            <h3>The Team</h3>
            <div className='pro-container'>
                <div className='top-container'>
                    <div className='pro-card'>
                        <img src={profilePic} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                    <div className='pro-card'>
                        <img src={sadesh} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                    <div className='pro-card'>
                        <img src={hotGirl} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                </div>
                <div className='bottom-container'>
                    <div className='pro-card'>
                        <img src={european} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                    <div className='pro-card'>
                        <img src={boy3} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}