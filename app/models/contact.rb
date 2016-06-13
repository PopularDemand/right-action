class Contact < ActiveRecord::Base
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  validates :name, presence: true
  validates :email, presence: true,
                    format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false },
                    confirmation: true
  validates :email_confirmation, presence: true

  before_save :downcase_email

  private
    def downcase_email
      self.email = email.downcase
      self.email_confirmation = email_confirmation.downcase
    end

end
