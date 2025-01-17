list_of_ans = ["Good Question...", "MMM, intresting", "I need to think about this", "I will get back to this...", "Why are you asking me this question?", "I am going to have to think some more.", "Sorrym but I have to tell you... I am working on improvements..."]
function submit(){
    var get_users_text = document.getElementById("users_text")
    var get_computer_ans_text = document.getElementById("computer_ans")
    get_computer_ans_text.innerHTML=list_of_ans[Math.floor(Math.random()*list_of_ans.length)];
    get_users_text.value
    newColor = document.createElement("text");

    const para = document.createElement("p");
    document.body.appendChild(para);
    // if (get_user_text.includes("dumb") == True){
    //     get_computer_ans.innerHTML = "Sorry you feel that way, I will try to improve."
    // }

}
//c