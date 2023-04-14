class ApplicationController < ActionController::Base
    # Begins basic authentication check
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :authorized_user
    skip_before_action :authorized_user, only: [:current_user]

    # Checks whether the current session involves a user with an authorized account
    def current_user
        user = User.find_by(id: session[:user_id])
    end 

    def authorized_user  
        @current_user = User.find_by(id: session[:user_id])
        render json: { error: "Not authorized" }, status: :unauthorized unless current_user
    end

    private

    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end 

     def render_not_found(error)
        render json: {errors: {error.model => "Not Found"}}, status: :not_found
    end 
end
