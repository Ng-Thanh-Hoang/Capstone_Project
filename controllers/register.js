import { User } from "../models/User.js";

document.querySelector('#frmSignUp').onsubmit = async function (e) {
    e.preventDefault();
    let member = new User();
    let arrInput = document.querySelectorAll('#frmSignUp .private');
  
    for (let input of arrInput) {
        member[input.id] = input.value;
    }
    
    let genderInputs = document.querySelectorAll('input[name="flexRadioDefault"]');
    for (let radio of genderInputs) {
        if (radio.checked) {
            member.gender = (radio.value === 'true');
            break;
        }
    }

    console.log(member);
    
    try {
      
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: member
        });

       
        console.log('Đăng ký thành công:', response.data.content);

    } catch (error) {
      
        console.error('Đăng ký thất bại:', error.response ? error.response.data : error.message);
    }
}
