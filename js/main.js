let c = 0, correct,wrng=0,crrct=0,curr=0;
let response = [];



$(function() {
    $.ajaxSetup({ cache: false });
    $.ajax({
        type: "GET",
        url: "./js/Qs.json",
        dataType: "json",
        contentType: 'multipart/form-data',
        cache: false,
	    headers: { "cache-control": "no-cache" },
        success: function (res) {
            console.log(res)
            response = res;
            if (c >= res.length) {
                console.log('Full')
            } else {
                loadQ(c);
            }
            
        }
    });

    function loadQ(index) {
        document.querySelector('.question').textContent = response[index]['question']
        correct = response[index]['answer']
        document.getElementById('q1').textContent = response[index]['a']
        document.getElementById('q2').textContent = response[index]['b']
        document.getElementById('q3').textContent = response[index]['c']
        document.getElementById('q4').textContent = response[index]['d']
    }

    document.body.addEventListener('click', function(e) {
        if(e.target.classList.contains('ans')) {
            curr++;
            document.querySelector('.prog').style.cssText = `width: ${curr/response.length * 100}%`

            if (e.target.getAttribute('name') == correct) {
                crrct++;
                c++;
                document.querySelector('.correct').textContent = crrct;
                if (c >= response.length) { 
                    setTimeout(() => {
                        document.querySelector('.full').style.cssText = `
                    display: flex;
                    justify-content: center;
                    align-items: center;`
                    }, 1000)
                    
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    loadQ(c);
                }
            } else {
                wrng++
                c++;
                document.querySelector('.wrong').textContent = wrng;
                if (c >= response.length) { 
                    setTimeout(() => {
                        document.querySelector('.full').style.cssText = `
                    display: flex;
                    justify-content: center;
                    align-items: center;`
                    }, 1000)
                    
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000)
                } else {
                    loadQ(c);
                }
            }

        }
    })

    
})

