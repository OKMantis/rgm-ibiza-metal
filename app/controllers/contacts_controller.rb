class ContactsController < ApplicationController
  skip_before_action :authenticate_user!
  before_action :skip_authorization

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    @admin = User.find_by(admin: true)
    if @contact.save
      UserMailer.user_contact(@contact).deliver_now
      AdminMailer.admin_contact(@admin, @contact).deliver_now
      redirect_to root_path
    else
      render :new
    end
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :phone, :email, :comment)
  end
end
