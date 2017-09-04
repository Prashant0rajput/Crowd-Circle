  $.fn.chat = function(id){
  App.global_chat = App.cable.subscriptions.create({
    channel: "RoomChannel",
    chatroom_id: id
  },{
    connected: function() {},
    disconnected: function() {},
    received: function(data) {
      var active_chatroom, messages_to_bottom;
      active_chatroom = $("[id = 'messages'][data-chat-room-id = '" + data.chatroom_id + "']");
      active_chatroom.append(data['message']);
      messages_to_bottom = function() {
        return $('#messages').scrollTop($('#messages').prop("scrollHeight"));
      };
      return messages_to_bottom();
    },
    speak: function(message, chatroom_id) {
      return this.perform('speak', {
        message: message,
        chatroom_id: chatroom_id
      });
    }
  });
    $("[id = 'outer_" + id + "']").keydown(function(event) {
      var ele;
      console.log(event.keyCode);
      if (event.keyCode === 13 && !event.shiftKey) {
        ele = event.target.value
        App.global_chat.speak(ele ,$('#messages').data('chat-room-id') );
        event.target.value = " ";
        event.preventDefault();
        return false;
      }
    });
  };
