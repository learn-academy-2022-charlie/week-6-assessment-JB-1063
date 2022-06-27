# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is a ruby class called BlogPostsController which is a container for the method ApplicationController
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # An instance variable @posts that will hold all BlogPost in the database
    @posts = BlogPost.all
  end

  # ---3)
  # A method called show that will place a specific blogpost specified in the (params[:id]) to te instance variable @post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # method called new for creating a form where a user can be flagged to input data
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    #strong params validation

    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
  #  An active record query for a single BlogPost

    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    #update a blog post with strong validation
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # redirect the post to blog_post_path

      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # protect from outside intruders
  private
  def blog_post_params
    # ---10)
    #strong params
    params.require(:blog_post).permit(:title, :content)
  end
end
