function getFooterContent() {
    const yourName = "Arita, Crizzy Jade";
    const currentDate = "July 18, 2025";
    const yourSection = "WD - 301";

    return `
        <hr>
        <p style="font-size: 0.8em; color: #777;">
            Name: ${yourName}<br>
            Date: ${currentDate}<br>
            Section: ${yourSection}
        </p>
    `;
}

module.exports = {
    getFooterContent
};

/* 
Name: Arita, Crizzy Jade D.
Date: July 18, 2025
Section: WD - 301
*/ 