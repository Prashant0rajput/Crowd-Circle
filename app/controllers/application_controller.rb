class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
skip_before_filter :verify_authenticity_token
  helper_method :current_user

  def current_user
    if cookies.signed[:user_id]
    @current_user ||= User.find(cookies.signed[:user_id])
    end 
  end

end
