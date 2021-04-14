
function hello() {
    setTimeout(() => {
        
        console.log("hello from docker node iotcr")
        hello();
    }, 1000);
}
hello();