import React from 'react'

function BodyContents() {
  return (
    <>
      	<div className="content">
		<div className="contact-profile">
			<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
			<p>Harvey Specter</p>
			<div className="social-media">
				<i className="fa-solid fa-video" aria-hidden="true"></i>
				<i className="fa-solid fa-square-phone-flip" aria-hidden="true"></i>
				
			</div>
		</div>
		<div className="messages">
			<ul>
				<li className="sent">
					<img src="http://emilcarlsson.se/assets/mikeross.png" alt="" />
					<p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
				</li>
				<li className="replies">
					<img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
					<p>When you're backed against the wall, break the god damn thing down.</p>
				</li>
			
			</ul>
		</div>
		<div className="message-input">
			<div className="wrap">
			<input type="text" placeholder="Write your message..." />
			<i className="fa fa-paperclip attachment" aria-hidden="true"></i>
			<button className="submit"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
			</div>
		</div>
	</div>
    </>
  )
}

export default BodyContents
