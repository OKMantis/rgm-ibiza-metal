class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  layout false, only: :coming_soon


  def home
  end

  def service_1
  end

  def service_2
  end

  def service_3
  end

  def service_4
  end

  def service_5
  end

  def gallery
  end

  def gallery_single
  end

  def about
  end

  def contact
  end

  def coming_soon
  end
end
