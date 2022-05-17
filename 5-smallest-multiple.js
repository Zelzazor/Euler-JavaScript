function smallestMultiple() {

    let number = 1;
    console.time("algorithm")
    while(true) {
        let remainderChecks = 0;
        for(let i = 1; i<21; i++){
            if(number % i > 0) break; 
            remainderChecks++;
        }
        if(remainderChecks === 20) break;
        number++;
    }
    console.timeEnd("algorithm")

    return number;
    
}


console.log(smallestMultiple());