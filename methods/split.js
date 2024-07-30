// Phương thức split() của String chia một chuỗi thành một mảng các chuỗi con:

const dates = ["2024-1-10", "2025-2-20", "2026-3-30", "2027-4-40", "2028-5-50"];

const formattedDates = dates.map((date) => {
    const part = date.split("-");
    console.log(part);

    // [ '2024', '1', '10' ]
    // [ '2025', '2', '20' ]
    // [ '2026', '3', '30' ]
    // [ '2027', '4', '40' ]
    // [ '2028', '5', '50' ]
});

// console.log(formattedDates);
