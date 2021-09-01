class Contact < ApplicationRecord
  validates :name, presence: true
  validates :phone, phone: true, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true
  validates :comment, length: { minimum: 20, maximum: 1000 }
end
