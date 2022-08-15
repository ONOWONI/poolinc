import profilePic from '../img/guy1.jpg'

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
                        <img src={profilePic} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                    <div className='pro-card'>
                        <img src={profilePic} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                </div>
                <div className='bottom-container'>
                    <div className='pro-card'>
                        <img src={profilePic} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                    <div className='pro-card'>
                        <img src={profilePic} className='pro-img' alt='profile pic of team member'/>
                        <h5>Ben Dover</h5>
                        <p>Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}