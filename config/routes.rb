Rails.application.routes.draw do
  resources :contacts
  root 'static_pages#home'

  resources :articles
end
