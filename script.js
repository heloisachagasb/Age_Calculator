function calculate() {
    let d = document.querySelector(".input-d")
    let m = document.querySelector(".input-m")
    let y = document.querySelector(".input-y")

    if (d.value.length == 0 || m.value.length == 0 || y.value.length == 0) {
        document.querySelector(".error-d").innerHTML = "This field is required"
        document.querySelector(".error-m").innerHTML = "This field is required"
        document.querySelector(".error-y").innerHTML = "This field is required"
        d.style.borderColor = "#FF5757"
        m.style.borderColor = "#FF5757"
        y.style.borderColor = "#FF5757"

        let pd = document.querySelector(".d-dmy")
        let pm = document.querySelector(".m-dmy")
        let py = document.querySelector(".y-dmy")

        pd.style.color = "#FF5757"
        pm.style.color = "#FF5757"
        py.style.color = "#FF5757"

    } else {
        let day = Number(d.value)
        let month = Number(m.value) - 1
        let year = Number(y.value)
        let currentYear = new Date().getFullYear()
        let currentMonth = new Date().getMonth()
        let currentDay = new Date().getDate()

        if (day >= 1 && (month === 1 && day <= 28 || month !== 1 & day <= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]) && year <= currentYear) {

            // to verify if the date provided is later than current date
            if (year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDay)) {
                // if the date provided is later than current date, don't calculate it
                document.querySelector(".error-d1").innerHTML = "Must be a valid day"
                document.querySelector(".error-m1").innerHTML = "Must be a valid month"
                document.querySelector(".error-y1").innerHTML = "Must be a valid year"
                d.style.borderColor = "#FF5757"
                m.style.borderColor = "#FF5757"
                y.style.borderColor = "#FF5757"

                let pd = document.querySelector(".d-dmy")
                let pm = document.querySelector(".m-dmy")
                let py = document.querySelector(".y-dmy")

                pd.style.color = "#FF5757"
                pm.style.color = "#FF5757"
                py.style.color = "#FF5757"
                return // close function
            }

            let resultYear = currentYear - year
            let adjustedCurrentMonth = currentMonth // adjust to current month

            if (month > currentMonth || (month === currentMonth && day >= currentDay)) {
                resultYear--
                adjustedCurrentMonth += 12 // adjust for correct months calculation
            }

            let resultMonth = adjustedCurrentMonth - month
            let resultDay = currentDay - day

            if (resultDay < 0) {
                resultMonth--
                // adjust to previous month when adding days
                resultDay += [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][(adjustedCurrentMonth - 1) % 12]
            }

            document.querySelector(".res-year").innerHTML = `${resultYear}`
            document.querySelector(".res-month").innerHTML = `${resultMonth}`
            document.querySelector(".res-day").innerHTML = `${resultDay}`

        } else {
            document.querySelector(".error-d1").innerHTML = "Must be a valid day"
            document.querySelector(".error-m1").innerHTML = "Must be a valid month"
            document.querySelector(".error-y1").innerHTML = "Must be a valid year"
            d.style.borderColor = "#FF5757"
            m.style.borderColor = "#FF5757"
            y.style.borderColor = "#FF5757"

            let pd = document.querySelector(".d-dmy")
            let pm = document.querySelector(".m-dmy")
            let py = document.querySelector(".y-dmy")

            pd.style.color = "#FF5757"
            pm.style.color = "#FF5757"
            py.style.color = "#FF5757"

        }
    }
}

// it limits how many digits the inputs must have
function limitInputDay(element) {
    element.value = element.value.replace(/\D/g, '')

    if (element.value.length > 2) {
        element.value = element.value.slice(0, 2)
    }
}

function limitInputMonth(element) {
    element.value = element.value.replace(/\D/g, '')

    if (element.value.length > 2) {
        element.value = element.value.slice(0, 2)
    }
}

function limitInputYear(element) {
    element.value = element.value.replace(/\D/g, '')

    if (element.value.length > 2) {
        element.value = element.value.slice(0, 4)
    }
}