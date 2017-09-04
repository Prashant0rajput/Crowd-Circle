class SessionsController < ApplicationController
def create
    user = User.from_omniauth(env["omniauth.auth"])
    cookies.signed[:user_id] = user.id
    redirect_to root_path
  end

  def destroy
    cookies.signed[:user_id] = nil
    redirect_to root_path
  end
end
