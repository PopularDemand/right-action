Rails.application.routes.draw do
  
  # Contacts
  resources :contacts
  get 'subscribe' => 'contacts#new'

  # Static pages
  root 'static_pages#home'

  # Articles
  resources :articles
end
