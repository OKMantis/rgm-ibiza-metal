Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get 'home', to: 'pages#home', as: :home
  get 'service_1', to: 'pages#service_1', as: :service_1
  get 'service_2', to: 'pages#service_2', as: :service_2
  get 'service_3', to: 'pages#service_3', as: :service_3
  get 'service_4', to: 'pages#service_4', as: :service_4
  get 'service_5', to: 'pages#service_5', as: :service_5

  get 'about', to: 'pages#about', as: :about
  get 'gallery', to: 'pages#gallery', as: :gallery
  get 'gallery-single', to: 'pages#gallery-single', as: :gallery_single
  get 'contact', to: 'pages#contact', as: :contact
end
