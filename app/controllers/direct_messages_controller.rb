class DirectMessagesController < ApplicationController
  def index
  end

  def show_remote
  	@chat_user = User.find(params[:id])
    users = [current_user, @chat_user]
    @chatroom = Chatroom.direct_message_for_users(users)
    @messages = @chatroom.messages.order(created_at: :desc).limit(100).reverse
    respond_to do |format|
    format.js{
    	
    }
    end
  end
end
