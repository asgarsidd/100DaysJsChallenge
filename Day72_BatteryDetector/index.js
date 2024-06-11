document.addEventListener('DOMContentLoaded', (event) => {
    initBattery();
});

function initBattery() {
    const batteryLiquid = document.querySelector(".B-liquid");
    const batteryStatus = document.querySelector(".B-status");
    const Bpercentage = document.querySelector(".B-percentage");

    // Check if elements are found
    if (!batteryLiquid || !batteryStatus || !Bpercentage) {
        console.error("One or more elements not found. Check your HTML structure.");
        return;
    }

    // Check if navigator.getBattery is supported
    if (!('getBattery' in navigator)) {
        console.error("Battery Status API is not supported in this browser.");
        batteryStatus.innerHTML = "Battery Status API not supported";
        return;
    }

    navigator.getBattery().then((batt) => {
        function updateBattery() {
            let level = Math.floor(batt.level * 100);
            Bpercentage.innerHTML = level + "%";
            batteryLiquid.style.height = `${level}%`;

            if (level == 100) {
                batteryStatus.innerHTML = `Battery Full <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";
            } else if (level <= 20 && !batt.charging) {
                batteryStatus.innerHTML = `Low Charge <i class="ri-plug-line animated-red animated-red"></i>`;
            } else if (batt.charging) {
                batteryStatus.innerHTML = `Charging ... <i class="ri-flashlight-line animated-green"></i>`;
            } else {
                batteryStatus.innerHTML = "";
            }

            // Update battery liquid color based on level
            batteryLiquid.className = 'B-liquid'; // Reset classes
            if (level <= 20) {
                batteryLiquid.classList.add("gradient-color-red");
            } else if (level <= 48) {
                batteryLiquid.classList.add("gradient-color-orange");
            } else if (level <= 80) {
                batteryLiquid.classList.add("gradient-color-yellow");
            } else {
                batteryLiquid.classList.add("gradient-color-green");
            }
        }

        updateBattery();
        batt.addEventListener("chargingchange", updateBattery);
        batt.addEventListener("levelchange", updateBattery);
    }).catch((error) => {
        console.error("Battery Status API is not supported or an error occurred:", error);
        batteryStatus.innerHTML = "Unable to retrieve battery status";
    });
}
