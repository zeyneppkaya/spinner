let a = 200;
const elements = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  \n']

const secondSpinner = () => {
    for (let i = 0; i <= elements.length; i++) {
        setTimeout(() => {
            if (i === elements.length) {
                console.log('\n')
            } else {
                process.stdout.write(elements[i])
            }
        }, a * i);
    }
};
setInterval(secondSpinner, 1000);