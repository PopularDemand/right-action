require 'test_helper'

class ContactsSubscribeTest < ActionDispatch::IntegrationTest
  
  def setup
    ActionMailer::Base.deliveries.clear
  end

  test "invalid signup information" do
    get subscribe_path
    assert_no_difference "Contact.count" do
      post contacts_path, contact: { name: "",
                                     email: "invalid.com",
                                     email_confirmation: "still@invalid.com" }
    end
    assert_template 'contacts/new'
    assert_select 'div#error_explanation'
    assert_select 'div.field_with_errors'
  end

  test "valid subscribe with confirmation email" do
    get subscribe_path
    assert_difference 'Contact.count', 1 do
      post contacts_path, contact: { name: "valid contact",
                                     email: "valid@email.com",
                                     email_confirmation: "valid@email.com" }
    end
    assert_equal 1, ActionMailer::Base.deliveries.size
    follow_redirect!
    assert_select "title", full_title("Home")   
  end
end
