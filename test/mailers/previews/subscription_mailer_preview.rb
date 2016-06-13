# Preview all emails at http://localhost:3000/rails/mailers/subscription_mailer
class SubscriptionMailerPreview < ActionMailer::Preview

  def welcome_email
    contact = Contact.first
    SubscriptionMailer.welcome_email(contact)
  end
end
