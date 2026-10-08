// =====================================
// ABHIJIT KARMAKAR TRADING WEBSITE
// =====================================


// HERO CHART
const heroCanvas = document.getElementById("heroChart");

const heroData = [
    2200,
    2250,
    2210,
    2310,
    2280,
    2380,
    2350,
    2420,
    2390,
    2458
];

new Chart(heroCanvas, {

    type: "line",

    data: {
        labels: [
            "9AM",
            "10AM",
            "11AM",
            "12PM",
            "1PM",
            "2PM",
            "3PM",
            "4PM",
            "5PM",
            "6PM"
        ],

        datasets: [{
            data: heroData,

            borderColor: "#00e676",

            backgroundColor: "rgba(0,230,118,0.08)",

            fill: true,

            tension: 0.4,

            pointRadius: 0,

            borderWidth: 3
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {

            x: {
                display: false
            },

            y: {
                display: false
            }
        }
    }
});


// MAIN ANALYSIS CHART

const mainCanvas = document.getElementById("mainChart");

const mainData = [
    85000,
    89000,
    87000,
    93000,
    91000,
    98000,
    101000,
    99000,
    108000,
    105000,
    115000,
    124850
];

new Chart(mainCanvas, {

    type: "line",

    data: {

        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],

        datasets: [{

            label: "Portfolio",

            data: mainData,

            borderColor: "#00e676",

            backgroundColor: "rgba(0,230,118,0.08)",

            fill: true,

            tension: 0.4,

            pointRadius: 3,

            pointBackgroundColor: "#00e676",

            borderWidth: 3
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }
        },

        scales: {

            x: {
                grid: {
                    color: "#182231"
                },

                ticks: {
                    color: "#667386"
                }
            },

            y: {

                grid: {
                    color: "#182231"
                },

                ticks: {
                    color: "#667386"
                }
            }
        }
    }
});


// SCROLL TO MARKETS

function scrollToMarkets() {

    document
        .getElementById("markets")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// BUTTON MESSAGE

function showMessage() {

    alert(
        "Welcome to Abhijit Karmakar Trading! \n\n" +
        "This is a demo trading website."
    );
}


// LOGIN BUTTON

document
    .querySelector(".login-btn")
    .addEventListener("click", function () {

        alert(
            "Login system will be connected here."
        );

    });


// SIMULATED MARKET UPDATE

setInterval(function () {

    const marketCards =
        document.querySelectorAll(".market-card h2");

    marketCards.forEach(function (card) {

        const currentText =
            card.innerText
                .replace(/[$,]/g, "");

        let current =
            parseFloat(currentText);

        if (!isNaN(current)) {

            const movement =
                (Math.random() - 0.5) * 10;

            current += movement;

            if (card.innerText.includes("")) {

                card.innerText =
                    "" +
                    current.toLocaleString(
                        "en-IN",
                        {
                            maximumFractionDigits: 2
                        }
                    );

            } else if (
                card.innerText.includes("$")
            ) {

                card.innerText =
                    "$" +
                    current.toLocaleString(
                        "en-US",
                        {
                            maximumFractionDigits: 2
                        }
                    );

            } else {

                card.innerText =
                    current.toLocaleString(
                        "en-IN",
                        {
                            maximumFractionDigits: 2
                        }
                    );
            }
        }

    });

}, 5000);