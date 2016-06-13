require 'test_helper'

class SubscriptionMailerTest < ActionMailer::TestCase
  test "welcome email" do
    contact = contacts(:sandra)
    mail = SubscriptionMailer.welcome_email(contact)
    assert_equal "Welcome to Right Action", mail.subject
    assert_equal [contact.email], mail.to
    # Configure environments/tests.rb with domain host default
    assert_equal ["noreply@right-action.com"], mail.from
    assert_match contact.name, mail.body.encoded
  end
end
