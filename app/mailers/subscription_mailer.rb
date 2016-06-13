class SubscriptionMailer < ApplicationMailer
  default from: 'noreply@right-action.com'

  def welcome_email(contact)
    @contact = contact
    mail(to: @contact.email, subject: "Welcome to Right Action")
  end
end
