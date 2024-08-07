let audioContext;
let oscillator;

function playSound() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // 440 Hz - A4 note
    oscillator.connect(audioContext.destination);
    oscillator.start();
    
    // Stop the sound after 5 seconds
    setTimeout(() => {
        oscillator.stop();
    }, 5000);
}

function checkForSubmitButton() {
    const submitButton = document.querySelector('input[type="submit"][name="submitbutton"]');
    if (submitButton && submitButton.offsetWidth > 0 && submitButton.offsetHeight > 0) {
        console.log('Submit button found and visible');
        playSound();
    } else {
        console.log('Submit button not found or not visible');
    }
}

function clickNextButton() {
    try {
        const nextButton = document.querySelector('a.mod_next');
        if (nextButton) {
            nextButton.click();
            console.log('Next button clicked successfully');
            return true;
        } else {
            console.log('Next button not found');
            return false;
        }
    } catch (error) {
        console.error('Error clicking Next button:', error);
        return false;
    }
}

function attemptClickRepeatedly() {
    const intervalId = setInterval(() => {
        console.log('Attempting to click Next button...');
        if (clickNextButton()) {
            console.log('Next button clicked, stopping attempts');
            clearInterval(intervalId);
        }
        checkForSubmitButton(); // Check for submit button on each attempt
    }, 1000);  // Try every 1 second
}

// Start attempting to click as soon as the script loads
attemptClickRepeatedly();

// Also set up a MutationObserver to watch for DOM changes
const observer = new MutationObserver((mutations) => {
    console.log('DOM changed, attempting to click Next button');
    clickNextButton();
    checkForSubmitButton(); // Check for submit button on DOM changes
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('Content script loaded and running');