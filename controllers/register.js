import { User } from "../models/User.js";

document.querySelector('#frmSignUp').onsubmit = async function (e) {
    e.preventDefault();
    let member = new User();
    let arrInput = document.querySelectorAll('#frmSignUp .private');
    let item = document.querySelectorAll('#frmSignUp #gender1').value;
    console.log(item);
    for(let input of arrInput){
            member[input.id]=input.value;
    }
    console.log(member);
    let respone = await axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: member
    });
}
