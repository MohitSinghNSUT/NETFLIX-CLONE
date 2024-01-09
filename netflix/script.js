console.log('this is my website');

let allele=document.querySelectorAll('.faqbox');
console.log(allele);
let arr=['first','second','third','fourth','fifth','sixth']
let hid=null;
let idx=null;
for (let index = 0; index < allele.length; index++) {
    const element = allele[index];
    element.addEventListener('click',()=>{
        console.log(index==idx);
        if(idx==index){    
            hid.style.display="none";
            idx=null;
        }
        else if(hid==null){
            console.log(index,hid,' equal clicked it \n');
            hid=document.getElementById(arr[index]);
            hid.style.display="block";
            hid.style.transition="display 100000s ease 5000s";
            idx=index;
        }
        else{
            hid.style.display="none";          
            console.log(index,hid,' not equal clicked it \n');
            hid=document.getElementById(arr[index]);
            hid.style.display="block";
            hid.style.transition="display 100000s ease 5000s";
            idx=index;
        }
    })
}