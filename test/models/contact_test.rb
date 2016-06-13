require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  
  def setup
    @contact = Contact.new(name: "sam", email: 'test@test.com',
                           email_confirmation: 'test@test.com')
  end

  test "should be valid" do
    assert @contact.valid?
  end

  test "name should be present" do
    @contact.name = "  "
    assert_not @contact.valid?
  end

  test "email should be present" do
    @contact.email = '   '
    assert_not @contact.valid?
  end

  test "should accept valid email address" do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.com
                         first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |address|
      @contact.email = address
      @contact.email_confirmation = address
      assert @contact.valid?, "#{address.inspect} should be valid"
    end
  end

  test "email validation should reject invalid addresses" do
    invalid_addresses = %w[user@example,com user_at_foo.org user@example.
                           foo@bar_baz.com foo@bar+baz.com email@this..com]
    invalid_addresses.each do |address|
      @contact.email = address
      assert_not @contact.valid?, "#{address.inspect} should be invalid"
    end
  end

  test 'email should be downcased' do
    mixed_case_email = 'tHiS@FoO.Com'
    @contact.email_confirmation = mixed_case_email
    @contact.email = mixed_case_email
    @contact.save
    assert_equal mixed_case_email.downcase, @contact.reload.email
  end

  test "email address should be unique" do
    duplicate_contact = @contact.dup
    duplicate_contact.email = @contact.email.upcase
    @contact.save
    assert_not duplicate_contact.valid?
  end

  test "email address should match confirmation" do
    @contact.email_confirmation = "different@email.com"
    assert_not @contact.valid?
  end

end
