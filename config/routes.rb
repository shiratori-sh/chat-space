Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :cleate, :edit, :update]do
    resources :messages,only: [:index, :cleate]
  end
end
