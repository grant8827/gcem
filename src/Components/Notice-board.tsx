import React from 'react'
import '../App.css'
function NoticeBoard() {
  return (
    <div className='noticeBoard'>
        <h2 className='noticeTitle'>Notice Board</h2>
        <div className='notice'>
        <div className='Events'>
            <h3 className='eventTitle'>Service Schedule</h3>
            <div className='eventDate'>
                <ul>
                    <li>Sunday School 10am</li>
                    <li>Sunday Morning Divine Service 11am</li>
                    <li>Tuesdays Fasting Service 10am</li>  
                    <li>Tuesdays Bible Studies 7pm</li>
                    <li>Fridays Youth Service 7pm</li>
                </ul>
        
            </div>
        </div>
        
        <div className='Events'>
            <h3 className='eventTitle'>Up Coming Events</h3>
            <div className='eventDate'>
            <p>No Upcoming Events Announcements</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NoticeBoard