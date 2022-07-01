$("#submit-form").validate({
   rules:{
        fname:{
            minlength: 2
        }
   },
   messages: {
    fname:{
        required: "please enter your first name",
        minlength: "should contain atleast 2 charcters"
    }
  },
  submitHandler: function(form) {
      form.submit();
    }
   });