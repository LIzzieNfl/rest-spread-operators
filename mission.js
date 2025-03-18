// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = []; // Holds one-time tasks
let monitoringTaskId = null; // Will store setInterval ID

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
    oneTimeTasks.forEach(task => {
        setTimeout(task.func, task.delay);
    });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log("🚀 Monitoring space station systems...");
    }, 2000);
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
    if (monitoringTaskId) {
        clearInterval(monitoringTaskId);
        console.log("🛑 Monitoring stopped.");
    }
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
    let timeLeft = duration;
    let countdownId = setInterval(() => {
        if (timeLeft > 0) {
            console.log(`⏳ Countdown: ${timeLeft} seconds`);
            timeLeft--;
        } else {
            console.log("🚀 Liftoff!");
            clearInterval(countdownId);
        }
    }, 1000);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
    addOneTimeTask(() => console.log("✅ System check complete!"), 3000);
    runOneTimeTasks(); // Run all scheduled tasks
    startMonitoring(); // Start monitoring immediately
    setTimeout(stopMonitoring, 7000); // Stop monitoring after 7 seconds
    setTimeout(() => startCountdown(5), 10000); // Countdown starts after 10 seconds
}

scheduleMission(); // Starts the mission
