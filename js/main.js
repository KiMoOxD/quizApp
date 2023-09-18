let c = 0, correct,wrng=0,crrct=0,curr=0,len=0;
let response = [];



const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
    response = JSON.parse(this.responseText);
    len = response.length;
    
    //loadQ(c);
    shuf(response)

    document.body.addEventListener('click', function(e) {
        if(e.target.classList.contains('ans')) {
            curr++;
            document.querySelector('.prog').style.cssText = `width: ${curr/len * 100}%`

            if (e.target.getAttribute('name') == correct) {
                crrct++;
                c++;
                document.querySelector('.correct').textContent = crrct;
                    //loadQ(c);
                    shuf(response)
            } else {
                wrng++
                c++;
                document.querySelector('.wrong').textContent = wrng;
                    //loadQ(c);
                    shuf(response)
            }

        }
    })

}

xhttp.open("GET", "./js/Qs.json");
xhttp.send();


// $(function() {
//     $.ajax({
//         type: "GET",
//         url: "./js/Qs.json",
//         dataType: "json",
//         success: function (res) {
//             console.log(res)
//             response = res;
//             len = response.length;
//                 //loadQ(c);
//                 shuf(response)

//         }
//     });


//     document.body.addEventListener('click', function(e) {
//         if(e.target.classList.contains('ans')) {
//             curr++;
//             document.querySelector('.prog').style.cssText = `width: ${curr/len * 100}%`

//             if (e.target.getAttribute('name') == correct) {
//                 crrct++;
//                 c++;
//                 document.querySelector('.correct').textContent = crrct;
//                     //loadQ(c);
//                     shuf(response)
//             } else {
//                 wrng++
//                 c++;
//                 document.querySelector('.wrong').textContent = wrng;
//                     //loadQ(c);
//                     shuf(response)
//             }

//         }
//     })

    
// })


function shuf(arr) {
    if (arr.length >= 1) { 

        let rand = Math.floor(Math.random() * arr.length)
        let temp = arr[arr.length-1];
        arr[arr.length-1] = arr[rand];
        arr[rand] = temp;
        
        document.querySelector('.question').textContent = arr[arr.length-1]['question']
        correct = arr[arr.length-1]['answer']
        document.getElementById('q1').textContent = arr[arr.length-1]['a']
        document.getElementById('q2').textContent = arr[arr.length-1]['b']
        document.getElementById('q3').textContent = arr[arr.length-1]['c']
        document.getElementById('q4').textContent = arr[arr.length-1]['d']

        arr.length--;  
    } else {
        document.querySelector('.ans').style.cssText = `pointer-events: none;`
        setTimeout(() => {
            document.querySelector('.full').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;`
        }, 1000)
        
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }
}


    // function loadQ(index) {
    //     document.querySelector('.question').textContent = response[index]['question']
    //     correct = response[index]['answer']
    //     document.getElementById('q1').textContent = response[index]['a']
    //     document.getElementById('q2').textContent = response[index]['b']
    //     document.getElementById('q3').textContent = response[index]['c']
    //     document.getElementById('q4').textContent = response[index]['d']
    // }
