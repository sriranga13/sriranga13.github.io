// Get chat container
const chatContainer = document.getElementById('chat-container');

// Show welcome message and options
function showOptions() {
	chatContainer.innerHTML = `
		<h2>How can I assist you today?</h2>
		<p>Please select an option:</p>
		<button id="contact-btn">Contact Info</button>
		<button id="cool-stuff-btn">Cool Stuff</button>
		<button id="resume-btn">Resume</button>
	`;

	// Add event listeners for each option
	document.getElementById('contact-btn').addEventListener('click', showContactInfo);
	document.getElementById('cool-stuff-btn').addEventListener('click', showCoolStuff);
	document.getElementById('resume-btn').addEventListener('click', showResume);
}

// Show contact information
function showContactInfo() {
	chatContainer.innerHTML = `
		<h2>Contact Info</h2>
		<p>Find me on Github and LinkedIn:</p>
		<a href="https://github.com/sriranga13/" target="_blank" class="icon-btn"><img src="github.jpg" alt="Github icon"></a>
		<a href="https://www.linkedin.com/in/sri-gorantla-a9121b204/" target="_blank" class="icon-btn"><img src="linkedin.jpg" alt="LinkedIn icon"></a>
		<a href="mailto:gorantlasriranga@gmail.com"> <button>Send an Email</button></a> 
		<details class="phonenumber"><summary><img src="phone.png" width="20" height="20"></summary><p>330-671-1989</p></details>
		<br>
		<br>
		<button id="main-menu-btn">Main Menu</button>
	`;

	// Add event listener for "Main Menu" button
	document.getElementById('main-menu-btn').addEventListener('click', showOptions);
}

// Show cool stuff
function showCoolStuff() {
	chatContainer.innerHTML = `
		<h2>Cool Stuff<button id="main-menu-btn">Main Menu</button></h2>
		<p>My lil creations:</p>
		<a href="https://sriranga13.github.io/My-3D-Robot/" target="_blank" class="icon-btnn"><img src="robot.png" alt="Cool website 1"></a><p>An interactive robot</p>
		<a href="https://sriranga13.github.io/wordify/" target="_blank" class="icon-btnn"><img src="wordify.png" alt="Cool website 2"></a><p>A cool 3D game</p>
		<br>
		<button id="main-menu-btn">Main Menu</button>
		<br>
		<br>
	`;

	// Add event listener for "Main Menu" button
	document.getElementById('main-menu-btn').addEventListener('click', showOptions);
}

// Show resume
function showResume() {
	chatContainer.innerHTML = `
		<h2>Resume</h2>
		<p>Download my resume:</p>
		<a href="resume.pdf" download><button>Sri's Resume</button></a>
		<br>
		<button id="main-menu-btn">Main Menu</button>
	`;

	// Add event listener for "Main Menu" button
	document.getElementById('main-menu-btn').addEventListener('click', showOptions);
}

// Show initial options
showOptions();
