class CommentsController < ApplicationController
    skip_before_action :authorized_user

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render json: @comment, status: :created, location: @comment
        else 
            render json: @comment.errors, status: :unprocessable_entity
        end 
    end 

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def index
        @comments = Comment.all
        render json: @comments
    end

    def update
        if @comment.update(comment_params)
            render json: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end 

    def destroy
        @comment.destroy
        head :no_content
    end

    private

    def find_comment 
        @comment = Comment.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:content, :user_id, :record_id)
    end 
end
