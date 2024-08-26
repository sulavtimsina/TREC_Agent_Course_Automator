// Configurable constants
const BEEP_INTERVAL = 10000; // Time between beeps in milliseconds
const BEEP_DURATION = 200;   // Duration of each beep in milliseconds
const BEEP_FREQUENCY = 440;  // Frequency of the beep in Hz
const BEEP_VOLUME = 0.5;     // Volume of the beep (0.0 to 1.0)

let audioContext;
let oscillator;
let gainNode;

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        gainNode = audioContext.createGain();
        gainNode.connect(audioContext.destination);
    }
}

function playBeep() {
    initAudio();
    
    oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(BEEP_FREQUENCY, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(BEEP_VOLUME, audioContext.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + BEEP_DURATION / 1000);
    
    oscillator.connect(gainNode);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + BEEP_DURATION / 1000);
}

function checkForSubmitButton() {
    const submitButton = document.querySelector('input[type="submit"][name="submitbutton"]');
    if (submitButton && submitButton.offsetWidth > 0 && submitButton.offsetHeight > 0) {
        console.log('Submit button found and visible');
        playBeep();
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

// Set up a MutationObserver to watch for DOM changes
const observer = new MutationObserver((mutations) => {
    console.log('DOM changed, attempting to click Next button');
    clickNextButton();
    checkForSubmitButton(); // Check for submit button on DOM changes
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Start periodic beeping
setInterval(playBeep, BEEP_INTERVAL);

console.log('Content script loaded and running');
