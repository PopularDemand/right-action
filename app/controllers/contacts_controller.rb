class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      # Tell mailer to send an email after save
      SubscriptionMailer.welcome_email(@contact).deliver_later
      flash[:success] = "You have now subscribed to Right Action!"
      redirect_to root_url
        # Not entirely sure what these are about
      # format.html { redirect_to(root_path, notice: 'Subscription was successfully created.') }
      # format.json { render json: root_path, status: created, locaiton: @contact }
    else
      render 'new'
      # format.html { render root_path }
      # format.json { render json: @contact.errors, status: :unprocessable_entity }
    end
  end

  def edit
  end

  def update
  end

  private
    def contact_params
      params.require(:contact).permit(:name, :email, :email_confirmation)
    end
    
end
