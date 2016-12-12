
    new Vue({
      el: '#app',
      data: {
        EventsDiscussion: [

            ],
            Discuss:"",
            attend:0,
            checkedNames: [],
          },
          methods: {
            addDiscussion: function(){
              this.EventsDiscussion.push(this.Discuss);
              this.Discuss="";
            },
            removeDiscussion: function(){
              this.EventsDiscussion.pop(this.Discuss);
            },
            Increase: function(){
              this.attend +=1;
            },
            Decrease: function(){
              this.attend -=1;
            }
        },
     });
