//now what we have to do is that get tha Date and Time from the browser and conveert that time to degree
//and here we will use querySelector(".class_name")
//not document.getElementById

const hourElement = document.querySelector(".hourHand");
const minuteElement = document.querySelector(".minuteHand");
const secondElement = document.querySelector(".secondHand");

function updateClock(){
    const currentTime = new Date();
    // setTimeout(updateClock,1000);       //to update at seconds so that we can see the secondHand moving
    // or we can setInterval at last see line 36.
    // console.log(currentTime);
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const second = currentTime.getSeconds();

    //now we convert the time to degree

    const hourdegree = (hour/12)*360;
    console.log(hourdegree);
    hourElement.style.backgroundColor = "green";
    // hourElement.style.transform = `rotate(${hourdegree}deg)`;
    hourElement.style.transform = "rotate("+hourdegree+"deg)"; 

    const minutedegree = (minute/60)*360;
    minuteElement.style.transform = `rotate(${minutedegree}deg)`

    const seconddegree = (second/60)*360;
    secondElement.style.transform = `rotate(${seconddegree}deg)`

}

// updateClock();

// OR
    setInterval(updateClock, 1000);


