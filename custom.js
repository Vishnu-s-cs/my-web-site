jQuery('#submit-form').validate({
  
    rules:{
        firstname:"required",
        lastname:"required",
        email:"required",
        number:{
            required:true,
            minlength:10,
            maxlength:10
        },
        subject:"required"
    },
    messages:{
        firstname:"Please Enter your name",
        lastname:"Please Enter Your Last Name",
        email:"Enter your valid email  id",
        number:"Enter Valid mobile no.",
        subject:"Just give me a feedback",
       
    },
    submitHandler:function(form) {
        form.submit();
    }
  

})
