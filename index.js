let initial = 60;

let target =0 ;


function targetnumber(){
    // let target = document.querySelector(".target");
    // target.textContent = targetvalue;     // here textcontent come because .value is only for input tag...

    target = Math.floor(Math.random()*10);
    document.querySelector(".target").textContent = target;



}
function makebubble(){
let clutter = "";
console.log("hi");

for (let i=0 ; i<160 ; i++){

    let n = Math.floor(Math.random()*10);

    clutter += `<div class="circle"> ${n} </div>`;
}
document.querySelector(".bigsection").innerHTML = clutter;

}


function hitandtarget(){

    targetnumber();
    let hit = document.querySelector('.hit');
    hit.textContent = 0;
    document.querySelector('.bigsection').addEventListener('click' , (button) => {
       
        // console.log(Number(button.target.textContent));
        var ans = Number(button.target.textContent);
        if (ans === target){    
                // if == then only works as textcontent as string number
    
              // console.log(targetvalue);
               hit.textContent++;
               // button.style.backgroundColor = "rgb(55, 104, 73)";       // good one element.style.etc = "";
                makebubble();
                targetnumber();
            
                 
        }
        
    })

}



function timecount(){
    

    
    
    let timer = setInterval(() => {

        if(initial>0){

            initial--;  // because i have assign at first 60
            document.querySelector('.time').textContent = initial;
        }

        else if(initial==0){
            let gameover = document.querySelector('.bigsection');
            gameover.innerHTML = `<div class="over">
            Game Over
        </div>`
        }

        else{
            clearInterval(timer);
        }
        

    } , 1000);
}


let start = document.querySelector('.inputbutton');
    
start.addEventListener('click' , () => {
    makebubble()
    timecount();
    hitandtarget();
})



makebubble();

