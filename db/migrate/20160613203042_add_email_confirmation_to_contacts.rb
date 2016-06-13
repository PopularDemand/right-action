class AddEmailConfirmationToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :email_confirmation, :string
  end
end
