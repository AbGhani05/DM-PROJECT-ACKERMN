function runAckerman() {
    let m = document.getElementById("m-input").value;
    let n = document.getElementById("n-input").value;
    let executionTime = [];
    let inputValues = [];
    
    var txt1;
  
    window.onlaod=function(){
        txt1 = document.getElementById('txt1')
        btn1 = document.getElementById('btn1')
        
    }

    function btnclick(){
        txt1.value+="hellp";
    }

    function ackermann(m, n) {
        if (m === 0) {
            return n + 1;
        } else if (n === 0) {
            return ackermann(m - 1, 1);
        } else {
            return ackermann(m - 1, ackermann(m, n - 1));
        }
    }

    for (let m = 0; m <= 3; m++) {
        for (let i = 0; i < 3; i++) {
            let n = Math.floor(Math.random() * 10);
            let totalTime = 0;
            for (let j = 0; j < 3; j++) {
                let t1 = performance.now();
                ackermann(m, n);
                let t2 = performance.now();
                totalTime += (t2 - t1) / 1000;
            }
            let avgTime = totalTime / 3;
            inputValues.push([m, n]);
            executionTime.push(avgTime);
        }
    }

    var bigOh = inputValues.map(value => Math.pow(2, value[1]));

    var trace1 = {
        x: inputValues,
        y: executionTime,
        type: 'scatter',
        name: 'Execution Time'
    };
    var trace2 = {
        x: inputValues,
        y: bigOh,
        type: 'scatter',
        name: 'Big Oh'
    };

    var data = [trace1, trace2];
    var layout = {
        title: 'Ackerman Function Execution Time vs Big Oh',
        xaxis: {
            title: 'Input Values (m,n)',
            type: 'category'
        },
        yaxis: {
            title: 'Time (s)'
        }
    };

    Plotly.newPlot('result', data, layout);
}

